import { Modal, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import './styles.css';
import Button from '@/components/Button';
import React, { useState, useEffect } from 'react';
import { IWeeklyQuestion } from '@/components/QuestionModalManager';
import FaceScale from '@/components/FaceScale';

interface QuestionModalProps {
    open: boolean;
    title: string;
    questionIndex: number;
    questionAmount: number;
    question: IWeeklyQuestion;
    sendAnswerFunction: (index: number, value: string) => void;
    goBackFunction: (index: number) => void;
}

const QuestionModal = ({
    open,
    title,
    questionIndex,
    questionAmount,
    question,
    sendAnswerFunction,
    goBackFunction,
}: QuestionModalProps) => {
    const [answer, setAnswerState] = useState('');
    const [faceScale, setFaceScale] = useState(0);

    const handleSendAnswer = () => {
        if (question.type === 'quantitative') {
            setAnswerState(faceScale.toString());
            sendAnswerFunction(questionIndex, question.answer ? question.answer : faceScale.toString());
        } else {
            sendAnswerFunction(questionIndex, question.answer ? question.answer : answer);
        }
        setAnswerState('');
        setFaceScale(0);
    };

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
                <Box className="question-container">
                    <Box className={'question-modal-index-container'}>
                        <Typography className={'h5'} textAlign={'center'}>
                            {questionIndex}
                        </Typography>
                    </Box>
                    <Box className={'modal-question-container'}>
                        <Typography textAlign={'center'} className={'body1'}>
                            {question.question}
                        </Typography>
                    </Box>
                    <Box style={{ width: '100%' }} className="chulo">
                        {question.type === 'quantitative' ? (
                            <Box>
                                <FaceScale
                                    onChange={(value) => setFaceScale(value)}
                                    questionOptions={
                                        JSON.parse(question.metadata!).options
                                    }
                                    question={question}
                                />
                            </Box>
                        ) : question.type === 'qualitative' ? (
                            <Box className={'question-modal-input-container'}>
                                <textarea
                                    className={'question-modal-textarea'}
                                    placeholder={'Escribí acá...'}
                                    onChange={(e) =>
                                        setAnswerState(e.target.value)
                                    }
                                    value={
                                        question.answer
                                            ? question.answer
                                            : answer
                                    }
                                />
                            </Box>
                        ) : (
                            <Typography
                                textAlign={'center'}
                                className={'body1'}
                            ></Typography>
                        )}
                    </Box>
                    <Button
                        variant="grey"
                        size="medium"
                        onClick={() => goBackFunction(questionIndex)}
                    >
                        Volver a la pregunta anterior
                    </Button>
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
