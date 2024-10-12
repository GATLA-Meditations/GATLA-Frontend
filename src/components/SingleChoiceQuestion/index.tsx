import React from 'react';
import {Radio} from '@mui/material';
import '../NumericQuestion/styles.css';

interface SingleChoiceQuestion {
    questionTitle: string;
    id: string;
    optionsText: string[];
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    selected: string;
}


const SingleChoiceQuestion = ({
    questionTitle,
    id,
    optionsText,
    onChange,
    selected,
}: SingleChoiceQuestion) => {
    return (
        <div className="layout">
            <div className="head">
                <p className="questionText">{questionTitle}</p>
            </div>
            <div className={'question-options-text-container'}>
                <div className="button-container">
                    {Array.from({length: optionsText.length}, (_, i) => (
                        <div className={'option-container'} key={i}>
                            <Radio
                                id={id}
                                key={i}
                                checked={optionsText[i] === selected}
                                value={optionsText[i]}
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
export default SingleChoiceQuestion;