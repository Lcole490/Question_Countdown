import { useState, useCallback  } from 'react';
import QUESTIONS from '../questions.js';
import quizCompletImg from '../assets/quiz-complete.png';
import Question from './Question.jsx';

export default function Quiz(){


    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex =  userAnswers.length;


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
    
 

    return(

        <div id="quiz">

        <Question 
        key={activeQuestionIndex}
        questionIndex={activeQuestionIndex}
        onSelectAnswer={handleSelectedAnswer}
        onSkippedAnswer={handleSkippedAnswer} />

        </div>
    )
}