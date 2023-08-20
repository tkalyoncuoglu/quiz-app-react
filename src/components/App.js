import React from "react";
import StartButton from "./StartButton";
import QuizBox from "./QuizBox";
import ScoreBox from "./ScoreBox";
import { useState, createContext } from "react";
import sorular from "../soru";


const AppContext = createContext();

const App = () => {

    const [state, setState] = useState({
        sorular, 
        soruIndex : 0, 
        active : false,
        rightAnswer : 0,
        scoreActive : false});


    return (
        <AppContext.Provider value={{state, setState}}>
        <StartButton/>
        <QuizBox/>
        <ScoreBox/>
        </AppContext.Provider>
    
    )
}

export default App;
export {AppContext};