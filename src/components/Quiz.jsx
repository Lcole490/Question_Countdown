import { useState, useCallback  } from 'react';
import QUESTIONS from '../questions.js';
import quizCompletImg from '../assets/quiz-complete.png';
import Question from './Question.jsx';

export default function Quiz(){


    const [answerState, setAnswerState] = useState('');

    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;


    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;


   

   const handleSelectedAnswer = useCallback(function handleSelectedAnswer(selectedAnswer){

        setAnswerState('answered');
        setUserAnswers((prevUserAnswers)=>{
           return(
            [...prevUserAnswers, selectedAnswer]
           )

        });

        setTimeout(()=>{
            if (selectedAnswer===QUESTIONS[activeQuestionIndex].answers[0]){
                setAnswerState('correct');
            }
            else{
                setAnswerState('wrong');
            }

            setTimeout(() =>{
                setAnswerState('');
            }, 2000);
        }, 1000)
    }, [activeQuestionIndex]);

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
        questionText={QUESTIONS[activeQuestionIndex].text} 
        answers={QUESTIONS[activeQuestionIndex].answers}
        answerState={answerState}
        selectedAnswer={userAnswers[userAnswers.length -1]}
        onSelectAnswer={handleSelectedAnswer}
        onSkippedAnswer={handleSkippedAnswer} />

        </div>
    )
}