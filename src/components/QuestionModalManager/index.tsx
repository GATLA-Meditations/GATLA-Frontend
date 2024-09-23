import { useState } from 'react';
import QuestionModal from '@/components/QuestionModal';

import GenericModal from '@/components/GenericModal';

interface questionsMockType {
    title: string;
    answer: string;
}

const QuestionModalManager = () => {
    const questionsMock: questionsMockType[] = [
        {
            title: '¿Qué te aportó esta semana la meditación?',
            answer: '',
        },
        {
            title: '¿Cómo te sentiste durante esta semana?',
            answer: '',
        },
    ];

    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const [questions, setQuestions] = useState(questionsMock);

    const handleQuestionModalAnswer = (index: number, answer: string) => {
        setQuestions((prevState) => {
            const updatedQuestions = prevState.map((q, i) =>
                i === index - 1 ? { ...q, answer } : q
            );

            if (activeQuestionIndex + 1 > updatedQuestions.length) {
                // Here we have to send the questions and answers to the backend
                console.log(updatedQuestions);
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
                topButtonAction={
                    () => setActiveQuestionIndex(activeQuestionIndex + 1)
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
            {activeQuestionIndex <= questionsMock.length && (
                <QuestionModal
                    open={true}
                    title={'Resumen semanal'}
                    questionIndex={activeQuestionIndex}
                    questionAmount={questionsMock.length}
                    question={questionsMock[activeQuestionIndex - 1].title}
                    sendAnswerFunction={handleQuestionModalAnswer}
                />
            )}
        </>
    );
};

export default QuestionModalManager;
