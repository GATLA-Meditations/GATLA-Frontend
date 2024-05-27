import React, { useState } from 'react';
import Button from '@/components/Button';
import Question from '@/components/Question';
import TestModal from '../TestModal';
import style from './style.module.css';

interface Props {
    questions: string[];
}

const QuestionsList: React.FC<Props> = ({ questions }) => {
    const [selectedValues, setSelectedValues] = useState<string[]>(
        Array(questions.length).fill('')
    );
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOkToSend, setIsOkToSend] = React.useState(false);

    const handleSelectChange = (index: number, value: string) => {
        const newSelectedValues = [...selectedValues];
        newSelectedValues[index] = value;
        setSelectedValues(newSelectedValues);
        setIsOkToSend(false);
    };

    const handleSubmit = () => {
        if (selectedValues.indexOf('') === -1 || isOkToSend) {
            console.log('Submitted values:', selectedValues);
            // Here you can send the selected values to your backend or perform any other action
        } else {
            setIsModalOpen(true);
            setIsOkToSend(true);
        }
    };

    function handleCloseOfModal() {
        setIsModalOpen(false);
        setIsOkToSend(false);
    }

    const ModalContent = () => {
        return (
            <div className={style.popupContent}>
                <h1>Respuestas incompletas</h1>
                <h3>
                    Notamos que no contesto todas las preguntas. No es necesario
                    forzar una respuesta
                </h3>
                <h3>¿desea enviar de todos modos el questionario?</h3>
                <Button
                    variant={'green'}
                    size={'medium'}
                    onClick={handleSubmit}
                >
                    <h3>Enviar</h3>
                </Button>
                <Button
                    variant={'red'}
                    size={'medium'}
                    onClick={handleCloseOfModal}
                >
                    <h3>No enviar</h3>
                </Button>
            </div>
        );
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '28px',
                alignItems: 'center',
                marginBottom: '50px',
            }}
        >
            {questions.map((question, index) => (
                <Question
                    key={index}
                    selectedValue={selectedValues[index]} // Pass selected value as prop
                    onSelectChange={(value) => handleSelectChange(index, value)} // Pass callback function
                    questionNumber={1 + index}
                    questionText={question}
                />
            ))}
            <TestModal open={isModalOpen} onClose={handleCloseOfModal}>
                {ModalContent()}
            </TestModal>
            <Button variant={'green'} size={'medium'} onClick={handleSubmit}>
                <h3>Enviar respuestas</h3>
            </Button>
        </div>
    );
};

export default QuestionsList;
