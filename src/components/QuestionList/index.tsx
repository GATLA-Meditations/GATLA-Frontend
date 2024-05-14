import React from 'react';
import Question from "../Question";

interface Props {
    questions: string[];
}

function QuestionsList({ questions }: Props) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '28px'}}>
            {questions.map((question, index) => (
                <Question key={index} questionNumber={1 + index} questionText={question}/>
            ))}
        </div>
    );
}

export default QuestionsList;
