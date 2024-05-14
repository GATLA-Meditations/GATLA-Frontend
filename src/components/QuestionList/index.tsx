import React, { useState } from 'react';
import Button from "@/components/Button";
import Question from "@/components/Question";

interface Props {
    questions: string[];
}

const QuestionsList: React.FC<Props> = ({ questions }) => {
    const [selectedValues, setSelectedValues] = useState<string[]>(Array(questions.length).fill(''));

    const handleSelectChange = (index: number, value: string) => {
        const newSelectedValues = [...selectedValues];
        newSelectedValues[index] = value;
        setSelectedValues(newSelectedValues);
    };

    const handleSubmit = () => {
        console.log("Submitted values:", selectedValues);
        // Here you can send the selected values to your backend or perform any other action
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' , alignItems: 'center', marginBottom: "100px"}}>
            {questions.map((question, index) => (
                <Question
                    key={index}
                    selectedValue={selectedValues[index]} // Pass selected value as prop
                    onSelectChange={(value) => handleSelectChange(index, value)} // Pass callback function
                    questionNumber={1 + index}
                    questionText={question}
                />
            ))}
            <Button variant={'green'} size={"medium"} onClick={handleSubmit}>
                <h3>Enviar respuestas</h3>
            </Button>
        </div>
    );
}

export default QuestionsList;
