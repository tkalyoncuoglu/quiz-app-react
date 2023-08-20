import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "./App";
import { useEffect } from "react";

const QuizBox = () => {

    const [correctIndex,setCorrectIndex] = useState(-1)

    const [selectedIndex, setSelectedIndex] = useState(-1);

    const [nextQuestion, setNextQuestion] = useState(false);

    const [count, setCount] = useState(10);

    const context = useContext(AppContext);

    const soru = context.state.sorular[context.state.soruIndex];

    useEffect(() => {
        let timerId = null;
        console.log("count", count);
        if (count > 0 && selectedIndex === -1 && context.state.active) {
            timerId = setTimeout(() => {
            setCount((prevCount) => prevCount - 1);
            }, 1000); 
        } 
        else if(count == 0)
        {
            const rightAnswerIndex = Object.keys(soru.cevapSecenekleri).findIndex(x => x === soru.dogruCevap);
            setCorrectIndex(rightAnswerIndex);
            setSelectedIndex(rightAnswerIndex);
            setNextQuestion(true);
        }
        return () => clearTimeout(timerId);
    }, [count, context.state.active, selectedIndex]);


    function optionSelected({item,index}) {
        const rightAnswerIndex = Object.keys(soru.cevapSecenekleri).findIndex(x => x === soru.dogruCevap);
        setCorrectIndex(rightAnswerIndex);
        setSelectedIndex(index);

       
        if(rightAnswerIndex == index) {
            context.setState({...context.state, rightAnswer : context.state.rightAnswer + 1});
        } 
    
        setNextQuestion(true);
    }
    

    const nextQuestionHandler = () => {
        setCorrectIndex(-1);
        setSelectedIndex(-1);
        setCount(10);
        if(context.state.soruIndex == context.state.sorular.length - 1) {
            context.setState({...context.state, active : false, scoreActive : true});
        }
        else {
            context.setState({...context.state, soruIndex : context.state.soruIndex + 1});
            setNextQuestion(false);
        }
    }
    

    return (
        <div className={context.state.active ? "card quiz_box active" : "card quiz_box"}>
        <header className="card-header">
            <div className="title">Quiz App</div>
            <div className="timer">
                <div className="time_text">Kalan Süre</div>
                <div className="time_second">{count}</div>
            </div>
            <div className="time_line"></div>
        </header>
        <section className="card-body">
            <div className="question_text">
            <span>{soru.soruMetni}</span>
            </div>
            <div className="option_list">
                {
                    Object.keys(soru.cevapSecenekleri).map((item, index) => ( 
                        
                        
                                <div key={index} className={selectedIndex == index ? (correctIndex == index ?"option correct" : "option incorrect") :
                                (selectedIndex == -1 ? "option" : "option disabled") } onClick={() => optionSelected({item, index})}>
                                    
                                    <span><b>{item}</b>: {soru.cevapSecenekleri[item]}</span>
                                    { selectedIndex === index && (correctIndex === index ?
                            <div className="icon"><i className="fas fa-check"></i></div> : 
                            <div className="icon"><i className="fas fa-times"></i></div>)
                            }
                                </div>
                                  )
                    )
                }
            </div>
        </section>
        <footer className="card-footer">
            <div className="question_index">
            <span className="badge bg-warning">{context.state.soruIndex + 1} / {context.state.sorular.length}</span>`
            </div>
            <button className={nextQuestion ? "next_btn btn btn-primary btn-sm show" : "next_btn btn btn-primary btn-sm"} onClick={nextQuestionHandler}>Sonraki Soru</button>
        </footer>
    </div>
    )
}

export default QuizBox;