import { useState, useCallback  } from 'react';
import QUESTIONS from '../questions.js';
import quizCompletImg from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer.jsx';
import Answers from './Answers.jsx';

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
        <div id="question">

            <QuestionTimer key={activeQuestionIndex} timeout={10000} onTimeout={handleSkippedAnswer} />

             <h2 > {QUESTIONS[activeQuestionIndex].text}</h2>

             <Answers 
                key={activeQuestionIndex}
                answers={QUESTIONS[activeQuestionIndex].answers} 
                selectedAnswer={userAnswers[userAnswers.length -1]} 
                answerState={answerState}
                onSelect={handleSelectedAnswer}/>
            

        </div>
        </div>
    )
}