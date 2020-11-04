import React from "react";

const Question = ({
  handleAnswer,
  handleNextQuestion,
  showAnswers,
  data: { question, correct_answer, answers },
}) => {
  
  return (
    <div>
      <div className="bg-white text-orange-800 p-10 rounded shadow-md">
        <h2
          className="text-2xl"
          dangerouslySetInnerHTML={{ __html: question }}
        ></h2>
      </div>
      <div className="flex flex-wrap mt-4 justify-around">
        {answers.map((answer) => {
            const textColor= showAnswers? answer===correct_answer?"bg-white w-5/12 p-4 text-green-500 rounded-shadow mb-4":"bg-white w-5/12 p-4 text-red-500 rounded-shadow mb-4":"bg-white w-5/12 p-4 text-orange-800 font-semibold rounded-shadow mb-4"
          return (
            <button
              onClick={() => handleAnswer(answer)}
              dangerouslySetInnerHTML={{ __html: answer }}
              className={textColor} 
            ></button>
          );
        })}
        {showAnswers && (<button className="bg-purple-500 w-5/12 p-4 text-white-800 font-semibold rounded-shadow mb-4" 
        onClick={handleNextQuestion}>Next</button>)}
        
      </div>
    </div>
  );
};

export default Question;
