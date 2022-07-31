import React ,{useState} from 'react'
import {Link} from "react-router-dom"
import {MenuIcon, XIcon} from '@heroicons/react/outline'
function Navbar() {
  const [flag, setflag] = useState(false)
  return (
    <div>
        <div className='bg-white shadow-md p-5'>
        <div className='flex w-full flex-wrap justify-between items-center'>
        <h1 className='font-bold text-xl font-Poppins ml-10'>My Apps</h1>
        <div className='space-x-2  w-full justify-center -mt-8  flex-row hidden md:flex md:space-x-4 '>
            <Link to="/CounterApp" className='bg-gray-600 hover:bg-gray-700 px-2 py-2 rounded-md hover:scale-110 transition-all ease-out delay-30  text-white'> Counter</Link>
            <Link to="/tempratureApp" className='bg-gray-600 hover:bg-gray-700 px-2 py-2 rounded-md text-white hover:scale-110 transition-all ease-out delay-30'> Temprature</Link>
            <Link to="/FilterListApp" className='bg-gray-600 hover:bg-gray-700 px-2 py-2 rounded-md text-white hover:scale-110 transition-all ease-out delay-30'> Filter List </Link>
            <Link to="/FormApp" className='bg-gray-600 hover:bg-gray-700 px-2 py-2 rounded-md text-white hover:scale-110 transition-all ease-out delay-30'> Form </Link>
            <Link to="/QuizApp" className='bg-gray-600 hover:bg-gray-700 px-2 py-2 rounded-md text-white hover:scale-110 transition-all ease-out delay-30'> Quiz </Link>
            <Link to="/" className='bg-gray-600 hover:bg-gray-700 px-2 py-2 rounded-md text-white hover:scale-110 transition-all ease-out delay-30'> ReactAuth0App </Link>
        
        </div>
          {!flag ?(<button onClick={()=>setflag(true)}><MenuIcon className='w-8 md:hidden h-8 mr-5'/></button>):(<button onClick={()=>setflag(false)}><XIcon className='w-8 h-8 mr-5'/></button>) }
          
          
        </div>
    </div>
    {flag && (<div className=' mt-4 duration-500 transition-all ease-out delay-1000 '>
        <ul className='mx-4 bg-white text-black shadow-lg border-black border-2 rounded-md '>
        <Link to="/CounterApp" onClick={()=>setflag(false)} className=''><li className='hover:bg-gray-600 hover:text-white px-10 py-2 text-lg'>Counter</li></Link>
        <hr className='bg-gray-500 h-0.5'/>
        <Link to="/tempratureApp" onClick={()=>setflag(false)}><li className='hover:bg-gray-600 hover:text-white  px-10  py-2 text-lg'>Temprature</li></Link>
        <hr className='bg-gray-500 h-[0.100rem]'/>
        <Link to="/FilterListApp" onClick={()=>setflag(false)}><li className='hover:bg-gray-600 hover:text-white px-10  py-2 text-lg'>Filter List</li></Link>
        <hr className='bg-gray-500 h-0.5'/>
        <Link to="/FormApp" onClick={()=>setflag(false)}><li className='hover:bg-gray-600 hover:text-white  px-10  py-2 text-lg'>Form</li></Link>
        <hr className='bg-gray-500 h-[0.100rem]'/>
        <Link to="/QuizApp" onClick={()=>setflag(false)}><li className='hover:bg-gray-600 hover:text-white  px-10  py-2 text-lg'>Quiz</li></Link>
        <hr className='bg-gray-500 h-[0.100rem]'/>
        <Link to="/" onClick={()=>setflag(false)}><li className='hover:bg-gray-600 hover:text-white  px-10  py-2 text-lg'>ReactAuth0App</li></Link>
          
        </ul>
    </div>)}
    </div>
  )
}

export default Navbar