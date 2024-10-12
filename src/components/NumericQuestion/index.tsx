import React from 'react';
import '@/app/globals.css';
import './styles.css';
import { Radio } from '@mui/material';

interface NumericQuestion {
    questionTitle: string;
    id: string;
    optionsAmt: number;
    optionsText: string[];
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    selected: string;
}

const NumericQuestion = ({
    questionTitle,
    optionsText,
    optionsAmt,
    onChange,
    selected,
    id,
}: NumericQuestion) => {
    return (
        <div className="layout">
            <div className="head">
                <p className="questionText">{questionTitle}</p>
            </div>
            <div className={'question-options-text-container'}>
                <div className="button-container">
                    {Array.from({ length: optionsAmt }, (_, i: number) => (
                        <div className={'option-container'} key={i}>
                            <Radio
                                id={id}
                                key={i}
                                checked={(i + 1).toString() === selected}
                                value={(i + 1).toString()}
                                name="radio-buttons"
                                inputProps={{'aria-label': (i + 1).toString()}}
                                onChange={onChange}
                            />
                            <p className={'options-text'}>
                                {optionsText[i]}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NumericQuestion;
