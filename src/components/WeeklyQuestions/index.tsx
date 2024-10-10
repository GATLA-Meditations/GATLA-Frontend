import React, { useState } from 'react';
import { Box } from '@mui/material';
import Question from '../Question';
import './styles.css';
import QuestionQualitative from '@/components/QuestionQualitative';

const mockQuestions = [
    { text: 'esto es una pregunta', type: 'cualitativa' },
    {
        text: 'esto es otra pregunta',
        type: 'cuantitativa',
        options: ['muy mal', 'muy bien', 'regular'],
    },
];

export interface IWeeklyQuestion {
    text: string;
    type: 'cuantitativa' | 'cualitativa';
    options?: string[];
}

export interface WeeklyQuestionsProps {
    questions: IWeeklyQuestion[];
}

export const WeeklyQuestions = ({ questions }: WeeklyQuestionsProps) => {
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [qualitativeAnswers, setQualitativeAnswers] = useState<{
        [key: string]: string;
    }>({});

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
    };

    const handleQualitativeChange =
        (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setQualitativeAnswers({
                ...qualitativeAnswers,
                [id]: event.target.value,
            });
        };

    return (
        <Box className="scroll-container">
            {questions.map((question, index) => {
                const id = `question-${index}`;
                return (
                    <Box key={index}>
                        {question.type === 'cuantitativa' ? (
                            <Question
                                questionText={question.text}
                                id={id}
                                optionsAmt={question.options.length}
                                optionsText={question.options}
                                onChange={handleOptionChange}
                                selected={selectedOption}
                            />
                        ) : (
                            <QuestionQualitative
                                questionText={question.text}
                                id={id}
                                onChange={handleQualitativeChange(id)}
                                answer={qualitativeAnswers[id] || ''}
                            />
                        )}
                    </Box>
                );
            })}
        </Box>
    );
};

export default WeeklyQuestions;
