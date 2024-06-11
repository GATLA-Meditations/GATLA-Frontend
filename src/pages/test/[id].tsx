import { useRouter } from 'next/router';
import Question from '@/components/Question';
import React, { useEffect, useState } from 'react';
import { getQuestionnarieById } from '@/service/apis';
import WithAuth from '@/components/WithAuth';

interface QuestionProps {
    name: string;
    id: string;
    optionChecked: string;
    optionsAmt: number;
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
                    ? { ...q, optionChecked: event.target.value }
                    : q
            )
        );
    };

    return (
        <>
            <h1>{questionnaireName}</h1>
            {questions?.map((question, key) => {
                return (
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
                        selected={question.optionChecked}
                    />
                );
            })}
            ;
        </>
    );
};

export default WithAuth(TestPage);
