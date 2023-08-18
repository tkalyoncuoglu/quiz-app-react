import React from "react";
import { useContext } from "react";
import { AppContext } from "./App";

const QuizBox = () => {

    const context = useContext(AppContext);


    return (
        <div className={context.state.active ? "card quiz_box active" : "card quiz_box"}>
        <header className="card-header">
            <div className="title">Quiz App</div>
            <div className="timer">
                <div className="time_text">Kalan Süre</div>
                <div className="time_second">10</div>
            </div>
            <div className="time_line"></div>
        </header>
        <section className="card-body">
            <div className="question_text">
                
            </div>
            <div className="option_list">
            </div>
        </section>
        <footer className="card-footer">
            <div className="question_index">
            </div>
            <button className="next_btn btn btn-primary btn-sm">Sonraki Soru</button>
        </footer>
    </div>
    )
}

export default QuizBox;