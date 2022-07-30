import React, {useState} from 'react'
import {QuizData} from '../Data'
import toast from "react-hot-toast"
function QuizApp() {
    
    const [score, setscore] = useState(0)
    const [flag, setflag] = useState(false)
    const [currentQuestionNumber, setcurrentQuestionNumber] = useState(0)
    const sethandlechange=(option)=>{
        
        QuizData.questions[currentQuestionNumber].a[option].correct ? (toast.success("Correct Option",{duration: 600,className:'mt-[12rem] ',style: {borderRadius: '10px',background: '#333',color: '#fff',
          },})) && setscore(score+1) : toast.error("Incorrect Option",{duration: 600,className:'mt-[12rem] ',style: {borderRadius: '10px',background: '#333',color: '#fff',
        },})
        
        setcurrentQuestionNumber(currentQuestionNumber+1)
    }

    if(currentQuestionNumber===4){
        return(
            setflag(true),
            setcurrentQuestionNumber(0)
        )
    }

    

    const again=()=>{
            setflag(false);
            setscore(0)
    }
   
  return (
    <div>
        <div className="flex   justify-center flex-col items-center">
        <h1 className=" font-bold text-2xl p-5 font-Edu mt-5 bg-gray-300 text-black rounded-lg shadow-md">
        Quiz App
      </h1>
            <div className='bg-gray-300 p-5 mt-10 rounded-2xl shadow-lg'>
                
               {flag ? (<div className='   flex justify-center  items-center text-xl font-Poppins flex-col  h-52 w-[20rem] sm:w-[30rem]'>  <h1 className='transition-transform  scale-150   ease-in delay-100 '>You Scored {score}/4</h1> <button className='mt-10 px-4 py-2 bg-gray-800 rounded-lg text-sm text-white ' onClick={()=>again()}> Start Again ? </button> </div>) :
                ( 
                    <div className='flex flex-col sm:flex-row'>
                        <div className='p-2 max-w-xs'>
                            <h1 className='text-4xl  font-Source font-medium'>Question <span className='text-4xl'>{currentQuestionNumber+1}</span><span className='text-2xl'>/4</span></h1>
                            <h2 className=' text-lg mt-2 '>{QuizData.questions[currentQuestionNumber].q}</h2>
                        </div>
                        <div className='flex flex-col justify-center items-center p-2'>
                            <ul className=' space-y-4'>
                                <button  onClick={()=>sethandlechange(0)} className='border-black hover:border-white border-2 w-60 bg-slate-50  hover:bg-gray-700 hover:font-bold hover:text-white flex items-center justify-center rounded-md p-1'>{QuizData.questions[currentQuestionNumber].a[0].option}</button>
                                <button  onClick={()=>sethandlechange(1)} className='border-black hover:border-white border-2 bg-slate-50  hover:bg-gray-700 hover:font-bold w-60 hover:text-white flex items-center justify-center rounded-md p-1'>{QuizData.questions[currentQuestionNumber].a[1].option}</button>
                                <button  onClick={()=>sethandlechange(2)} className='border-black hover:border-white border-2 w-60 bg-slate-50  hover:bg-gray-700 hover:font-bold hover:text-white flex items-center justify-center rounded-md p-1'>{QuizData.questions[currentQuestionNumber].a[2].option}</button>
                                <button  onClick={()=>sethandlechange(3)} className='border-black hover:border-white border-2 w-60 bg-slate-50 hover:bg-gray-700 hover:font-bold hover:text-white flex items-center justify-center rounded-md p-1'>{QuizData.questions[currentQuestionNumber].a[3].option}</button>
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