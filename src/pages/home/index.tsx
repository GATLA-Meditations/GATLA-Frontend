import Question from '@/components/Question';

const HomeScreen = () => {
    return (
        <div>
            <h1>Home</h1>
            <Question questionNumber={1} questionText={'Tu felicidad esta directamente proporcionada por tus bienes materiales'}/>
        </div>
    );
};

export default HomeScreen;
