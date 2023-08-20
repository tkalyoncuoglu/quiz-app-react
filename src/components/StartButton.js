import React from "react";
import { useContext } from "react";
import App, { AppContext } from "./App";


const StartButton = () => {

    const context = useContext(AppContext);

    return (
        <div className="btn_start">
            <button className="btn btn-warning btn-lg" onClick={() => context.setState({...context.state, active : true})}>Start Quiz</button>
        </div>
    )
}

export default StartButton;