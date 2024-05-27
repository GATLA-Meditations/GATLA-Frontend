import React from 'react';
import { Radio } from '@mui/material';
import './styles.css';

interface QuestionProps {
    questionNumber: number;
    questionText: string;
    selectedValue: string;
    onSelectChange: (value: string) => void; // Function to handle selection change
    numberOfQuestionOptions: number;
    optionsText?: string[];
}

const Question: React.FC<QuestionProps> = ({
    questionNumber,
    questionText,
    selectedValue,
    onSelectChange,
    numberOfQuestionOptions,
    optionsText,
}) => {
    const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value; // Get the new selected value
        onSelectChange(newValue); // Call the onSelectChange function passed from the parent component
    };

    return (
        <div className="layout">
            <div className="head">
                <p className="questionNumberText">Pregunta {questionNumber}</p>
                <p className="questionText">{questionText}</p>
            </div>
            <div>
                <div className="options-container">
                    {optionsText ? (
                        optionsText.map((option, index) => (
                            <p className={'options-text'} key={index}>
                                {option}
                            </p>
                        ))
                    ) : (
                        <>
                            <p className="options-text">
                                Completamente en desacuerdo
                            </p>
                            <p className="options-text">
                                Ni de acuerdo o desacuerdo
                            </p>
                            <p className="options-text">
                                Completamente de acuerdo
                            </p>
                        </>
                    )}
                </div>
                <div className="button-container">
                    {Array.from({ length: numberOfQuestionOptions }, (_, i) => (
                        <Radio
                            key={i}
                            checked={selectedValue === (i + 1).toString()} // Check if the current radio button is selected
                            value={(i + 1).toString()} // Set the value of the radio button
                            name="radio-buttons"
                            inputProps={{ 'aria-label': (i + 1).toString() }}
                            onChange={handleSelectChange} // Call the handleSelectChange function when the radio button is changed
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Question;
