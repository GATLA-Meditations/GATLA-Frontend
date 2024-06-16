import React from 'react';
import './styles.css';
import '@/app/globals.css';
import './styles.css';
import { Radio } from '@mui/material';

interface Question {
    questionText: string;
    id: string;
    optionsAmt: number;
    optionsText: string[];
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    selected: string;
}

const Question = ({
    questionText,
    optionsText,
    optionsAmt,
    onChange,
    selected,
    id,
}: Question) => {
    return (
        <div className="layout">
            <div className="head">
                <p className="questionText">{questionText}</p>
            </div>
            <div>
                <div className="options-container">
                    {optionsText.map((option, key) => {
                        return (
                            <p className={'options-text'} key={key}>
                                {option}
                            </p>
                        );
                    })}
                </div>
                <div className="button-container">
                    {Array.from({ length: optionsAmt }, (_, i) => (
                        <Radio
                            id={id}
                            key={i}
                            checked={(i + 1).toString() === selected}
                            value={(i + 1).toString()}
                            name="radio-buttons"
                            inputProps={{ 'aria-label': (i + 1).toString() }}
                            onChange={onChange}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Question;
