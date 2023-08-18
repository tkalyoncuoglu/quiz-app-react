import React from "react";
import StartButton from "./StartButton";
import QuizBox from "./QuizBox";
import ScoreBox from "./ScoreBox";
import { useState, createContext } from "react";


const AppContext = createContext();

const App = () => {

    const [state, setState] = useState({active : false});


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