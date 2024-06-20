import {useRouter} from 'next/router';
import Question from '@/components/Question';
import React, {useEffect, useState} from 'react';
import {getQuestionnarieById, submitQuestionnaire} from '@/service/apis';
import './styles.css'
import Button from "@/components/Button";
import WithAuth from '@/components/WithAuth';

export interface QuestionProps {
    name: string;
    id: string;
    answer: string;
    optionsAmt: number;
}

export interface QuestionnaireAnswers {
    questionnaireId: string,
    answers: QuestionProps[]
}

const TestPage = () => {
    const router = useRouter();
    const id = router.query.id as string;
    const [questionnaireName, setQuestionnaireName] = useState('');
    const [questions, setQuestions] = useState<QuestionProps[]>();

    useEffect(() => {
        getQuestionnaire().then();
    }, [id]);

    const getQuestionnaire = async () => {
        const response = await getQuestionnarieById(id);
        setQuestionnaireName(response.name);
        setQuestions(response.questions);
    };

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const questionId = event.target.id;
        setQuestions((prevQuestions) =>
            prevQuestions?.map((q) =>
                q.id === questionId
                    ? {...q, answer: event.target.value}
                    : q
            )
        );
    };

    const handleSendButton = async () => {
        await submitQuestionnaire({questionnaireId:id, answers:questions!!})
        await router.push('/home')
    }
    const allQuestionsAnswered = questions?.every(
        (question) => question.answer
    );

    return (
        <div className={'questionnaire-questions-main-div'}>
            <div className={'questionnaire-title-div'}>
                <p className={'h2 bold questionnaire-title-p'}>{questionnaireName}</p>
            </div>
            <div className={'questionnaire-questions-div'}>
                {questions?.map((question, key) => {
                    return (
                        <div className={'question-div'}>
                            <Question
                                optionsAmt={7}
                                optionsText={[
                                    'En desacuerdo',
                                    'Parcialmente de acuerdo',
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
                {allQuestionsAnswered  &&
                <Button variant={'common'} size={'medium'} onClick={handleSendButton}>
                    Enviar respuestas
                </Button>
                }
            </div>
        </div>
    );
};

export default WithAuth(TestPage);
