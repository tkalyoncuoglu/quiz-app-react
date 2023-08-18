import React from "react";

const ScoreBox = () => {
    return (
        <div className="card score_box">
        <div className="icon"><i className="fas fa-crown"></i></div>
        <div className="score_text"></div>
        <div className="buttons">
            <button className="btn btn-primary btn_replay">Tekrar Başlat</button>
            <button className="btn btn-primary btn_quit">Testi Bitir</button>
        </div>
    </div>
    )
}

export default ScoreBox;