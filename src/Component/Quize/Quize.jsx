import React, { useRef, useState } from "react";
import './Quize.css'
import { data } from "../../assets/data";
export default function Quize  ()
{
    const [index, setIndex] =useState(0)
    const [score,setScore] =useState(0)
    const [question ,setQuestion] = useState(data[index])
    const [lock,setLock]= useState(false)
    const [result, setResult] = useState(false)

    const Option1= useRef(null)
    const Option2= useRef(null)
    const Option3= useRef(null)
    const Option4= useRef(null)
    let optionArray=[Option1,Option2,Option3,Option4]



    const checkAns = (e,ans)=>{

        if (lock===false){
            if (question.answer=== ans) {
                e.target.classList.add("right")
                setScore(score+1)
                setLock(true)}
                
            else{
                e.target.classList.add("wrong")
                setLock(true)
                optionArray[question.answer-1].current.classList.add("right")}
        }
    }

    const next =  ()=>{
            if (lock===true){
                if (index===data.length -1){
                    setResult (true)
                    return 0
                }
                setIndex(index+1)
                setQuestion(data[index+1])
                setLock(false)
                optionArray.map((option)=>{
                    option.current.classList.remove("right","wrong")
                    return null
                })
            }
        }
        
    const reset = () =>{
        setIndex(0);
        setLock(false);
        setQuestion(data[0]);
        setScore(0);
        setResult(false);
    }
    return(

        <div className="container">
            <h1>Quize App</h1>
            <hr/>
            {result ?<></>:<>
                <h2>{index+1} {question.question}</h2>
                <ul>
                    <li ref={Option1} onClick={(e)=>{checkAns(e,1)}}> {question.option1}</li>
                    <li ref={Option2} onClick={(e)=>{checkAns(e,2)}}> {question.option2}</li>
                    <li ref={Option3} onClick={(e)=>{checkAns(e,3)}}> {question.option3}</li>
                    <li ref={Option4} onClick={(e)=>{checkAns(e,4)}}> {question.option4}</li> 
                    </ul>
                <div className="button-container">
                    <button onClick={next}>Next</button>
                    <button>Score = {score}</button>
                </div>

                <div className="index">{index+1} of {data.length} Question</div>
            </>}
            {result ? <>  
                <p>
                    <span style={{ color: "green", marginRight: "30px" }}>Correct Answer : {score}</span>
                    <span style={{ color: "red" }}>Wrong Answer : {data.length - score}</span>
                </p>
                <h2>Your Score is  : {Math.round((score/data.length)*100)}</h2>
                <div className="button-container">
                    <button onClick={reset}>Reset</button>
                </div></>:<></>}
        </div>
    )
}