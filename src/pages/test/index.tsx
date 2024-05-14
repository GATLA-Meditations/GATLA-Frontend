import './style.css'
import TopBar from '../../components/TopBar';
import NavBar from '../../components/NavBar';
import QuestionsList from "../../components/QuestionList";

const TestPage = () => {
    let questions = ["¿Qué piensas de todo esto?", "¿Cuál es tu opinión?", "¿Qué te parece?"];
    return (
        <div className={"TestPage"}>
            <TopBar amtNotifications={0}></TopBar>
            <QuestionsList   questions={questions}/>
            <NavBar value={0}></NavBar>
        </div>
    )
}

export default TestPage