import React from "react";
import { useContext } from "react";
import App, { AppContext } from "./App";


const StartButton = () => {

    const context = useContext(AppContext);

    return (
        <div class="btn_start">
            <button class="btn btn-warning btn-lg" onClick={() => context.setState({...context.state, active : true})}>Start Quiz</button>
        </div>
    )
}

export default StartButton;