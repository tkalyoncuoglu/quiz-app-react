import React from "react";
import { useContext } from "react";
import { AppContext } from "./App";

const ScoreBox = () => {

    const context = useContext(AppContext);

    const reStartHandler = () => {
        context.setState({...context.state, active : true, scoreActive : false, soruIndex : 0, rightAnswer : 0});
    }

    const finishHandler = () => {
        context.setState({...context.state, active : false, scoreActive : false, soruIndex : 0, rightAnswer : 0});
    }

    return (
        <div className={context.state.scoreActive ? "card score_box active" : "card score_box"} >
        <div className="icon"><i className="fas fa-crown"></i></div>
        <div className="score_text">
        Toplam {context.state.sorular.length} sorudan {context.state.rightAnswer} doğru cevap verdiniz.
        </div>
        <div className="buttons">
            <button className="btn btn-primary btn_replay" onClick={reStartHandler}>Tekrar Başlat</button>
            <button className="btn btn-primary btn_quit" onClick={finishHandler}>Testi Bitir</button>
        </div>
    </div>
    )
}

export default ScoreBox;