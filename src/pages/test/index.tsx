import './style.css'
import TopBar from '../../components/TopBar';
import QuestionsList from "../../components/QuestionList";
import TitleExplanationContainer from "@/components/TitleExplanationContainer";

const TestPage = () => {
    let questions = ["¿Qué piensas de todo esto?", "¿Cuál es tu opinión?", "¿Qué te parece?"];
    return (
        <div className={"TestPage"}>
            <TopBar amtNotifications={0}></TopBar>
            <TitleExplanationContainer title={"Introduccion"}  explainingText={"este es el test explicativo de la actividad"}><p>aca se explica el puntaje de la actividad</p></TitleExplanationContainer>
            <QuestionsList   questions={questions}/>
        </div>
    )
}

export default TestPage