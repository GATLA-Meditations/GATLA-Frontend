import { useRouter } from 'next/router';
import Question from '@/components/Question';
import React, { useEffect, useState } from 'react';
import { getQuestionnarieById, submitQuestionnaire } from '@/service/apis';
import './styles.css';
import Button from '@/components/Button';
import WithAuth from '@/components/WithAuth';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Loader from '@/components/Loader';

export interface QuestionProps {
    name: string;
    id: string;
    answer: string;
    optionsAmt: number;
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
    };
    const allQuestionsAnswered = questions?.every(
        (question) => question.answer
    );

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className={'questionnaire-questions-main-div'}>
            <div className={'progress-bar-arrow-div'}>
                <div className={'progress-bar'}>
                    {questions?.map((question, key) => {
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
                    <ArrowBackIosNewIcon sx={{ cursor: 'pointer' }} onClick={() => router.back()} />
                </div>
            </div>

            <div className={'questionnaire-title-div'}>
                <p className={'h4 bold questionnaire-title-p'}>
                    {questionnaireName}
                </p>
            </div>
            <div className={'questionnaire-questions-div'}>
                {questions?.map((question, key) => {
                    return (
                        <div className={'question-div'} key={key}>
                            <Question
                                optionsAmt={7}
                                optionsText={[
                                    'Completamente en desacuerdo',
                                    'En desacuerdo',
                                    'Parcialmente en desacuerdo',
                                    'Indiferente',
                                    'Parcialmente de acuerdo',
                                    'De acuerdo',
                                    'Completamente de acuerdo',
                                ]}
                                key={key}
                                id={question.id}
                                questionText={question.name}
                                onChange={handleOnChange}
                                selected={question.answer}
                            />
                        </div>
                    );
                })}
            </div>
            <div className={'questionnaire-send-button-div'}>
                {allQuestionsAnswered && (
                    <Button
                        variant={'common'}
                        size={'medium'}
                        onClick={handleSendButton}
                    >
                        Enviar respuestas
                    </Button>
                )}
            </div>
        </div>
    );
};

export default WithAuth(TestPage);
