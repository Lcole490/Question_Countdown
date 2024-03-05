import quizCompleteImg  from '../assets/quiz-complete.png';



export default function Summary(){
    return(
        <div id ="summary">
            <img src={quizCompleteImg} alt="Trophy Icon" />
            <h2> Quiz Completed</h2>
        
        <div id = "summary-stats">
            <p>
                <span className='number'>10%</span>
                <span className='text'>Skipped</span>
            </p>
            <p>
                <span className='number'>10%</span>
                <span className='text'>Answered Correctly</span>
            </p>
            <p>
                <span className='number'>10%</span>
                <span className='text'>Answered Incorrectly</span>
            </p>
        </div>
        <ol>
            <li>
                <h3>2</h3>
                <p className = "question"> Question Text</p>
                <p className='user-answer'>User's Answer</p>
            </li>
        </ol>
        </div>
    )
}