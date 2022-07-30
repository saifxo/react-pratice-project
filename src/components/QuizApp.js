import React, {useState} from 'react'
import {QuizData} from '../Data'
import toast from "react-hot-toast"
function QuizApp() {
    
    let [score, setscore] = useState(0)
    let [flag, setflag] = useState(false)
    let [currentQuestionNumber, setcurrentQuestionNumber] = useState(0)
    const sethandlechange=(option)=>{
        
        QuizData.questions[currentQuestionNumber].a[option].correct ? (toast.success("Correct Option",{duration: 600,className:'mt-[6rem]',})) && setscore(score+=1) : toast.error("Incorrect Option",{duration: 600,className:'mt-[6rem]',})
        
        setcurrentQuestionNumber(currentQuestionNumber=currentQuestionNumber+1)
        
        
    }
    currentQuestionNumber==4 ? flag=true : flag=false

  return (
    <div>
        <div className='flex justify-center items-cente '>
            <div className='bg-sky-900 p-5 mt-10 rounded-2xl shadow-lg'>
                
               {flag ? (<div className=' text-white transition-transform flex justify-center  scale-150   ease-in delay-100  items-center text-xl font-Poppins  h-52 w-[30rem]'>  <h1>You Scored {score}/4</h1> </div>) :
                ( 
                    <div className='flex flex-row'>
                        <div className='p-2 max-w-xs'>
                            <h1 className='text-4xl text-white font-Source font-medium'>Question <span className='text-4xl'>{currentQuestionNumber+1}</span><span className='text-2xl'>/4</span></h1>
                            <h2 className='text-white text-lg mt-2 '>{QuizData.questions[currentQuestionNumber].q}</h2>
                        </div>
                        <div className='flex flex-col p-2'>
                            <ul className='text-white space-y-4'>
                                <button  onClick={()=>sethandlechange(0)} className='border-white border-2 w-60  hover:bg-sky-800 hover:font-bold flex items-center justify-center rounded-md p-1'>{QuizData.questions[currentQuestionNumber].a[0].option}</button>
                                <button  onClick={()=>sethandlechange(1)} className='border-white border-2  hover:bg-sky-800 hover:font-bold w-60 flex items-center justify-center rounded-md p-1'>{QuizData.questions[currentQuestionNumber].a[1].option}</button>
                                <button  onClick={()=>sethandlechange(2)} className='border-white border-2 w-60  hover:bg-sky-800 hover:font-bold flex items-center justify-center rounded-md p-1'>{QuizData.questions[currentQuestionNumber].a[2].option}</button>
                                <button  onClick={()=>sethandlechange(3)} className='border-white border-2 w-60 hover:bg-sky-800 hover:font-bold flex items-center justify-center rounded-md p-1'>{QuizData.questions[currentQuestionNumber].a[3].option}</button>
                            </ul>
                        </div>
                    </div>
                    
                )}
            </div>
        </div>
    </div>
  )
}

export default QuizApp