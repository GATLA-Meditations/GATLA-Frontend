import React from 'react';
import { TextField } from '@mui/material';

interface QuestionQualitativeProps {
    questionText: string;
    id: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    answer: string;
}

const QualitativeQuestion = ({
    questionText,
    onChange,
    answer,
    id,
}: QuestionQualitativeProps) => {
    return (
        <div className="layout">
            <div className="head">
                <p className="questionText">{questionText}</p>
            </div>
            <div
                style={{ paddingRight: 10, paddingLeft: 10, paddingBottom: 10 }}
            >
                <TextField
                    id={id}
                    variant="outlined"
                    fullWidth
                    value={answer}
                    onChange={onChange}
                    placeholder={'Escribe tu respuesta aquí'}
                />
            </div>
        </div>
    );
};

export default QualitativeQuestion;
