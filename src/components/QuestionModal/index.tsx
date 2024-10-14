import { Modal, Slider, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import './styles.css';
import Button from '@/components/Button';
import React, { useState } from 'react';
import { IWeeklyQuestion } from '@/components/QuestionModalManager';

interface QuestionModalProps {
    open: boolean;
    title: string;
    questionIndex: number;
    questionAmount: number;
    question: IWeeklyQuestion;
    sendAnswerFunction: (index: number, value: string) => void;
}

const QuestionModal = ({
    open,
    title,
    questionIndex,
    questionAmount,
    question,
    sendAnswerFunction,
}: QuestionModalProps) => {
    const [answer, setAnswerState] = useState('');

    const handleSendAnswer = () => {
        sendAnswerFunction(questionIndex, answer);
        setAnswerState('');
    };

    const [sliderValue, setSliderValue] = useState(5);

    return (
        <Modal open={open} className={'question-modal'}>
            <Box className={'question-modal-container'}>
                <Box className={'question-modal-title-container'}>
                    <Typography
                        className={'h6 bold'}
                        color={'var(--primary-700)'}
                    >
                        {title}
                    </Typography>
                    <Typography className={'body2'} color={'var(--grey-300)'}>
                        Pregunta {questionIndex}/{questionAmount}
                    </Typography>
                </Box>
                <Box className='question-container'>
                    <Box className={'question-modal-index-container'}>
                        <Typography className={'h5'} textAlign={'center'}>
                            {questionIndex}
                        </Typography>
                    </Box>
                    <Box className={'modal-question-container'}>
                        <Typography textAlign={'center'} className={'body1'}>
                            {question.text}
                        </Typography>
                    </Box>
                    <Box style={{ width: '100%' }} className="chulo">
                        {question.type === 'cuantitativa' ? (
                            <Box>
                                <Slider
                                    defaultValue={5}
                                    min={0}
                                    max={10}
                                    step={1}
                                    onChange={(e, value) =>
                                        setSliderValue(value as number)
                                    }
                                />
                                <Typography
                                    textAlign={'center'}
                                    className={'body1'}
                                >
                                    Tu respuesta es: {sliderValue}
                                </Typography>
                            </Box>
                        ) : (
                            <Box className={'question-modal-input-container'}>
                                <textarea
                                    className={'question-modal-textarea'}
                                    placeholder={'Escribí acá...'}
                                    onChange={(e) =>
                                        setAnswerState(e.target.value)
                                    }
                                    value={answer}
                                />
                            </Box>
                        )}
                    </Box>
                    <Button
                        variant={'common'}
                        size={'medium'}
                        onClick={() => handleSendAnswer()}
                    >
                        {questionIndex === questionAmount
                            ? 'Enviar'
                            : 'Siguiente'}
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default QuestionModal;
