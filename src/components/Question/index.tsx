import React from 'react';
import './styles.css';
import '@/app/globals.css';
import './styles.css';
import { Radio } from '@mui/material';

interface Question {
    questionNumber: number;
    questionText: string;
    id:string;
}

const Question = ({ questionNumber, questionText }: Question) => {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className="layout">
            <div className="head">
                <p className="questionNumberText">Pregunta {questionNumber}</p>
                <p className="questionText">{questionText}</p>
            </div>
            <div>
                <div className="options-container">
                    <p className="options-text">Completamente en desacuerdo</p>
                    <p className="options-text">Ni de acuerdo o desacuerdo</p>
                    <p className="options-text">Completamente de acuerdo</p>
                </div>
                <div className="button-container">
                    <Radio
                        checked={selectedValue === '1'}
                        onChange={handleChange}
                        value="1"
                        name="radio-buttons"
                        inputProps={{ 'aria-label': '1' }}
                    />
                    <Radio
                        checked={selectedValue === '2'}
                        onChange={handleChange}
                        value="2"
                        name="radio-buttons"
                        inputProps={{ 'aria-label': '2' }}
                    />
                    <Radio
                        checked={selectedValue === '3'}
                        onChange={handleChange}
                        value="3"
                        name="radio-buttons"
                        inputProps={{ 'aria-label': '3' }}
                    />
                    <Radio
                        checked={selectedValue === '4'}
                        onChange={handleChange}
                        value="4"
                        name="radio-buttons"
                        inputProps={{ 'aria-label': '4' }}
                    />
                    <Radio
                        checked={selectedValue === '5'}
                        onChange={handleChange}
                        value="5"
                        name="radio-buttons"
                        inputProps={{ 'aria-label': '5' }}
                    />
                    <Radio
                        checked={selectedValue === '6'}
                        onChange={handleChange}
                        value="6"
                        name="radio-buttons"
                        inputProps={{ 'aria-label': '6' }}
                    />
                    <Radio
                        checked={selectedValue === '7'}
                        onChange={handleChange}
                        value="7"
                        name="radio-buttons"
                        inputProps={{ 'aria-label': '7' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Question;
