import React,{useState} from 'react'
import {Data} from '../Data'
function FilterListApp() {
    const [searchTerm, setsearchTerm] = useState("")
  return (
    
    <div className="flex  mt-5 justify-center flex-col items-center">
        <div className='bg-white p-5 rounded-lg'>
      <h1 className=" font-bold text-2xl p-5 mt-5 bg-black text-gray-100 rounded-lg">
        Filter List App
      </h1>
        <input className='mt-5 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-black focus:border-2" id="grid-last-name" type="text"' placeholder='search'onChange={(e)=>setsearchTerm(e.target.value)}></input>
        <div className='flex mt-5 justify-center flex-col items-center'>
        {Data.filter((val)=>{
            if(searchTerm=="")
            return val
            else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
            }
        }).map((item)=><p>{item.name}</p>)}
    </div>
    </div>
    </div>
    
  )
}

export default FilterListApp