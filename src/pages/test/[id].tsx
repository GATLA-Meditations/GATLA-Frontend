import { useRouter } from 'next/router';
import Question from '@/components/Question';
import { useEffect, useState } from 'react';
import { getQuestionnarieById } from '@/service/apis';

interface QuestionProps {
    name: string;
    id: string;
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

    return (
        <>
            <h1>{questionnaireName}</h1>
            {questions?.map((question, key) => {
                return (
                    <Question
                        questionNumber={1}
                        key={key}
                        id={question.id}
                        questionText={question.name}
                    />
                );
            })}
            ;
        </>
    );
};

export default TestPage;
