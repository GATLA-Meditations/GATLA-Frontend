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
    type: 'quantitative' | 'qualitative' | 'not_a_question';
    metadata?: string;
    answer: string;
}

const QuestionModalManager = ({ showToast }: WithToastProps) => {
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const [questions, setQuestions] = useState<IWeeklyQuestion[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [checked, setChecked] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(true);

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

    const checkIfThereIsAQuestionNotAnswered = () => {
        return questions.some((q) => {
            if (q.type === 'not_a_question') {
                return false;
            }
            if (q.type === 'quantitative' && q.answer === '0') {
                return true;
            }
            return q.answer === '';
        });
    };

    useEffect(() => {
        questions.pop();
    }, [checked]);

    const handleQuestionModalAnswer = (index: number, answer: string) => {
        setQuestions((prevState) => {
            let updatedQuestions = prevState.map((q, i) =>
                i === index - 1 ? { ...q, answer } : q
            );
            if (activeQuestionIndex + 1 > updatedQuestions.length) {
                const check = checkIfThereIsAQuestionNotAnswered();
                if (check) {
                    updatedQuestions.push({
                        id: 'temp_question_id',
                        question:
                            'No respondiste a todas las preguntas, queres enviar las respuetas igual?',
                        type: 'not_a_question',
                        metadata: '',
                        answer: '',
                    });
                    setChecked(true);
                }
            }

            if (activeQuestionIndex + 1 > updatedQuestions.length) {
                // Here we have to send the questions and answers to the backend
                const answersToPost = updatedQuestions.map(
                    ({ id, answer }) => ({ id, answer })
                );
                postAfterModuleQuestions({ answers: answersToPost })
                    .then(() =>
                        showToast(
                            'Respuestas enviadas correctamente!',
                            'success'
                        )
                    )
                    .catch((error) =>
                        showToast(
                            'Hubo un error al enviar las respuestas',
                            'error'
                        )
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
                postAfterModuleQuestions({ answers: answersToPost })
                    .then(() =>
                        showToast(
                            'Respuestas enviadas correctamente!',
                            'success'
                        )
                    )
                    .catch((error) =>
                        showToast(
                            'Hubo un error al enviar las respuestas',
                            'error'
                        )
                    );
            }

            return updatedQuestions;
        });

        setActiveQuestionIndex((prevIndex) => prevIndex + 1);
    };

    const handleNotAQuestion = () => {
        if (activeQuestionIndex + 1 > questions.length) {
            const answersToPost = questions.map(({ id, answer }) => ({
                id,
                answer,
            }));
            postAfterModuleQuestions({ answers: answersToPost })
                .then(() =>
                    showToast('Respuestas enviadas correctamente!', 'success')
                )
                .catch((error) =>
                    showToast('Hubo un error al enviar las respuestas', 'error')
                );
            setIsModalOpen(false);
        } else {
            setActiveQuestionIndex((prevIndex) => prevIndex + 1);
        }
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
                size={'medium'}
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
                    open={isModalOpen}
                    title={'Resumen semanal'}
                    questionIndex={activeQuestionIndex}
                    questionAmount={questions.length}
                    question={questions[activeQuestionIndex - 1]}
                    goBackFunction={() =>
                        setActiveQuestionIndex(activeQuestionIndex - 1)
                    }
                    sendAnswerFunction={
                        questions[activeQuestionIndex - 1].type ==
                        'quantitative'
                            ? handleQuestionModalAnswer
                            : questions[activeQuestionIndex - 1].type ==
                                'qualitative'
                                ? handleChangeQualitativeQuestion
                                : handleNotAQuestion
                    }
                />
            )}
        </>
    );
};

export default WithToast(QuestionModalManager);
