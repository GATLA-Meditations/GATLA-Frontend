import React, { useEffect, useState } from 'react';
import QuestionModal from '@/components/QuestionModal';

import GenericModal from '@/components/GenericModal';
import {
    getAfterModuleQuestions,
    postAfterModuleQuestions,
} from '@/service/apis';
import WithToast, { WithToastProps } from '@/hoc/withToast';

export interface IWeeklyQuestion {
    id: string;
    question: string;
    type: 'quantitative' | 'qualitative';
    options?: string[];
    answer: string;
}

const QuestionModalManager = ({ showToast }: WithToastProps) => {
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const [questions, setQuestions] = useState<IWeeklyQuestion[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchAfterModuleQuestions = async () => {
            setIsLoading(true);
            try {
                const response = await getAfterModuleQuestions();
                setQuestions(response);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchAfterModuleQuestions();
    }, []);

    const handleQuestionModalAnswer = (index: number, answer: string) => {
        setQuestions((prevState) => {
            const updatedQuestions = prevState.map((q, i) =>
                i === index - 1 ? { ...q, answer } : q
            );

            if (activeQuestionIndex + 1 > updatedQuestions.length) {
                // Here we have to send the questions and answers to the backend
                const answersToPost = updatedQuestions.map(
                    ({ id, answer }) => ({ id, answer })
                );
                postAfterModuleQuestions({answers: answersToPost})
                    .then(() =>
                        showToast(
                            'Respuestas enviadas correctamente!',
                            'success'
                        )
                    )
                    .catch((error) =>
                        console.error('Error posting answers:', error)
                    );
            }

            return updatedQuestions;
        });

        setActiveQuestionIndex((prevIndex) => prevIndex + 1);
    };

    const handleChangeQualitativeQuestion = (index: number, value: string) => {
        setQuestions((prevState) => {
            const updatedQuestions = prevState.map((q, i) =>
                i === index - 1 ? { ...q, answer: value } : q
            );

            if (activeQuestionIndex + 1 > updatedQuestions.length) {
                // Send the questions and answers to the backend
                const answersToPost = updatedQuestions.map(
                    ({ id, answer }) => ({ id, answer })
                );
                postAfterModuleQuestions({answers: answersToPost})
                    .then(() =>
                        showToast(
                            'Respuestas enviadas correctamente!',
                            'success'
                        )
                    )
                    .catch((error) =>
                        console.error('Error posting answers:', error)
                    );
            }

            return updatedQuestions;
        });

        setActiveQuestionIndex((prevIndex) => prevIndex + 1);
    };

    if (activeQuestionIndex === 0) {
        return (
            <GenericModal
                open={true}
                onClose={() => console.error('error')}
                topButtonAction={() =>
                    setActiveQuestionIndex(activeQuestionIndex + 1)
                }
                topButtonColor={'common'}
                size={'small'}
                bottomButton={false}
                description={
                    '¡Felicitaciones, completaste una semana de tratamiento!\n' +
                    '¿Querés contarnos un poco acerca de como fue esta semana?'
                }
            />
        );
    }

    return (
        <>
            {activeQuestionIndex <= questions.length && (
                <QuestionModal
                    open={true}
                    title={'Resumen semanal'}
                    questionIndex={activeQuestionIndex}
                    questionAmount={questions.length}
                    question={questions[activeQuestionIndex - 1]}
                    sendAnswerFunction={
                        questions[activeQuestionIndex - 1].type ==
                        'quantitative'
                            ? handleQuestionModalAnswer
                            : handleChangeQualitativeQuestion
                    }
                />
            )}
        </>
    );
};

export default WithToast(QuestionModalManager);
