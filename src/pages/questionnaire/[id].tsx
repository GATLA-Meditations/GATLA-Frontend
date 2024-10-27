import { useRouter } from 'next/router';
import NumericQuestion from '../../components/NumericQuestion';
import React, { useEffect, useState } from 'react';
import { getQuestionnarieById, submitQuestionnaire } from '@/service/apis';
import './styles.css';
import Button from '@/components/Button';
import WithAuth from '@/components/WithAuth';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Loader from '@/components/Loader';
import SingleChoiceQuestion from '@/components/SingleChoiceQuestion';
import NotAQuestion from '@/components/NotAQuestion';
import GenericModal from "@/components/GenericModal";

export interface QuestionProps {
    name: string;
    id: string;
    metadata: string;
    answer: string;
    optionsAmt: number;
    type: string;
}

export interface QuestionnaireAnswers {
    questionnaireId: string;
    answers: QuestionProps[];
}

const TestPage = () => {
    const router = useRouter();
    const id = router.query.id as string;
    const [questionnaireName, setQuestionnaireName] = useState('');
    const [questions, setQuestions] = useState<QuestionProps[]>();
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        getQuestionnaire().then();
    }, [id]);

    const getQuestionnaire = async () => {
        setIsLoading(true);
        const response = await getQuestionnarieById(id);
        setQuestionnaireName(response.name);
        setQuestions(response.questions);
        setIsLoading(false);
    };

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const questionId = event.target.id;
        setQuestions((prevQuestions) =>
            prevQuestions?.map((q) =>
                q.id === questionId ? { ...q, answer: event.target.value } : q
            )
        );
    };

    const handleSendButton = async () => {
        if (allQuestionsAnswered) {
            setIsLoading(true);
            await submitQuestionnaire({
                questionnaireId: id,
                answers: questions!!,
            });
            await router.push({
                pathname: '/home',
                query: {
                    message: 'El cuestionario ha sido enviado correctamente',
                    type: 'success',
                },
            });
            setIsLoading(false);
        } else {
            setIsModalOpen(true);
        }
    };

    const handleModalConfirm = async () => {
        setIsLoading(true);
        await submitQuestionnaire({
            questionnaireId: id,
            answers: questions!!,
        });
        await router.push({
            pathname: '/home',
            query: {
                message: 'El cuestionario ha sido enviado correctamente',
                type: 'success',
            },
        });
        setIsLoading(false);
        setIsModalOpen(false);
    };

    const questionsToAnswer = questions?.filter(
        (question) => question.type !== 'NOT_A_QUESTION'
    );

    const allQuestionsAnswered = questionsToAnswer?.every(
        (question) => question.answer
    );

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className={'questionnaire-questions-main-div'}>
            <div className={'progress-bar-arrow-div'}>
                <div className={'progress-bar'}>
                    {questionsToAnswer?.map((question, key) => {
                        return (
                            <div
                                key={key}
                                className={`progress-bar-item ${question.answer ? 'answered' : 'not-answered'}`}
                            ></div>
                        );
                    })}
                </div>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        marginLeft: '10px',
                    }}
                >
                    <ArrowBackIosNewIcon
                        sx={{ cursor: 'pointer' }}
                        onClick={() => router.back()}
                    />
                </div>
            </div>

            <div className={'questionnaire-title-div'}>
                <p className={'h4 bold questionnaire-title-p'}>
                    {questionnaireName}
                </p>
            </div>
            <div className={'questionnaire-questions-div'}>
                {questions?.map((question, key) => {
                    switch (question.type) {
                    case 'NUMERIC': {
                        return (
                            <div className={'question-div'} key={key}>
                                <NumericQuestion
                                    optionsAmt={
                                        JSON.parse(question.metadata).max
                                    }
                                    optionsText={Array.from(
                                        {
                                            length: JSON.parse(
                                                question.metadata
                                            ).max,
                                        },
                                        (_, i) => (i + 1).toString()
                                    )}
                                    key={key}
                                    id={question.id}
                                    questionTitle={question.name}
                                    onChange={handleOnChange}
                                    selected={question.answer}
                                />
                            </div>
                        );
                    }
                    case 'SINGLE_CHOICE': {
                        return (
                            <div className={'question-div'} key={key}>
                                <SingleChoiceQuestion
                                    optionsText={
                                        JSON.parse(question.metadata)
                                            .options
                                    }
                                    key={key}
                                    id={question.id}
                                    questionTitle={question.name}
                                    onChange={handleOnChange}
                                    selected={question.answer}
                                />
                            </div>
                        );
                    }
                    case 'NOT_A_QUESTION': {
                        return (
                            <div className={'question-div'} key={key}>
                                <NotAQuestion
                                    questionTitle={question.name}
                                />
                            </div>
                        );
                    }
                    }
                })}
            </div>
            <div className={'questionnaire-send-button-div'}>
                <Button
                    variant={'common'}
                    size={'medium'}
                    onClick={handleSendButton}
                >
                    Enviar respuestas
                </Button>
            </div>
            <GenericModal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Enviar cuestionario"
                description="No respondiste a todas las preguntas, ¿quieres enviar las respuestas igual?"
                topButtonText="Confirmar"
                topButtonAction={handleModalConfirm}
                topButtonColor="common"
                bottomButtonText="Cancelar"
                bottomButtonColor="red"
            />
        </div>
    );
};

export default WithAuth(TestPage);
