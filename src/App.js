import React, {useEffect, useState} from "react"
import {Question} from "./components/index"

const API_URL="https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple";

function App() {
  const [questions, setQuestions]=useState([]);
  const [currentIndex, setCurrentIndex]=useState(0);
  const [score, setScore]=useState(0);
  const [gameEnded, setGameEnded]=useState(false);
  const [showAnswers, setShowAnswers]= useState(false)
  useEffect(()=>{
    fetch(API_URL)
    .then(r=>r.json())
    .then(data=>{
      const questions=data.results.map((question)=>({
        ...question,
        answers: [
          question.correct_answer,
          ...question.incorrect_answers,
        ].sort(()=>Math.random()-0.5)
      }))
      setQuestions(questions);
    })
  },[])
const handleAnswer=(answer)=>{
  
  if(!showAnswers){
    if(answer===questions[currentIndex].correct_answer){
    setScore(score+1)
  }
  
  
  }


  setShowAnswers(true)

  let newIndex=currentIndex 
  setCurrentIndex(newIndex );
  if(newIndex>=questions.length - 1){
    setGameEnded(true)
  }
  
}
const handleNextQuestion=()=>{

  setShowAnswers(false);
  let newIndex=currentIndex + 1
  setCurrentIndex(newIndex );
}

return gameEnded?(<div><h2 className="text-3xl text-white font-bold">GAME OVER<br/>Your Score:{score}</h2></div>):( questions.length>0? (
    <div className="container">
      <Question data={questions[currentIndex]} handleAnswer={handleAnswer} showAnswers={showAnswers} handleNextQuestion={handleNextQuestion} />
      
      
      
    </div>
  ):(<h2>LOADING..</h2>));
}

export default App;
