import React, { useState } from 'react';
import QuestionModal from '@/components/QuestionModal';

import GenericModal from '@/components/GenericModal';

export interface IWeeklyQuestion {
    text: string;
    type: 'cuantitativa' | 'cualitativa';
    options?: string[];
    answer: string;
}

const QuestionModalManager = () => {
    const questionsMock: IWeeklyQuestion[] = [
        { text: 'esto es una pregunta', type: 'cualitativa', answer: '' },
        {
            text: 'esto es otra pregunta',
            type: 'cuantitativa',
            options: ['muy mal', 'muy bien', 'regular'],
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

    const handleChangeQualitativeQuestion = (index: number, value: string) => {
        setQuestions((prevState) => {
            return prevState.map((q, i) =>
                i === index - 1 ? { ...q, answer: value } : q
            );
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
            {activeQuestionIndex <= questionsMock.length && (
                <QuestionModal
                    open={true}
                    title={'Resumen semanal'}
                    questionIndex={activeQuestionIndex}
                    questionAmount={questionsMock.length}
                    question={questionsMock[activeQuestionIndex - 1]}
                    sendAnswerFunction={
                        questionsMock[activeQuestionIndex - 1].type ==
                        'cuantitativa'
                            ? handleQuestionModalAnswer
                            : handleChangeQualitativeQuestion
                    }
                />
            )}
        </>
    );
};

export default QuestionModalManager;
