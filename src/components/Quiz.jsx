import { useState, useCallback } from 'react';
import QUESTIONS from '../questions.js';
import quizCompletImg from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer.jsx';

export default function Quiz(){


    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;


    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;


   

   const handleSelectedAnswer = useCallback(function handleSelectedAnswer(selectedAnswer){
        setUserAnswers((prevUserAnswers)=>{
           return(
            [...prevUserAnswers, selectedAnswer]
           )

        });
    }, []);

    const handleSkippedAnswer = useCallback(() =>{

        handleSelectedAnswer(null), [handleSelectedAnswer]

    });


    if (quizIsComplete){
        return(
        <div id ="summary">
            <img src={quizCompletImg} alt="Trophy Icon" />
            <h2> Quiz Completed</h2>
        </div>
        ) 
    }   
    
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random()- 0.5);

    return(

        <div id="quiz">
        <div id="question">

            <QuestionTimer key={activeQuestionIndex} timeout={10000} onTimeout={handleSkippedAnswer} />

             <h2 > {QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id="answers">
                    {shuffledAnswers.map((answer) =>(
                        <li key={answer} className = "answer">
                            <button onClick={() => handleSelectedAnswer(answer)}>{answer}</button>
                        </li>
                    ))}
            </ul>

        </div>
        </div>
    )
}