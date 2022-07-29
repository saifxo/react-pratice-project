import React from 'react'
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <div>
        <div className='bg-white shadow-md p-5'>
        <div className='flex  flex-wrap justify-around items-center'>
        <h1 className='font-bold text-xl font-Poppins'>My Apps</h1>
        <div className='space-x-4 '>
            <Link to="/" className='bg-gray-600 px-2 py-2 rounded-md text-white'> Counter</Link>
            <Link to="/tempratureApp" className='bg-gray-600 px-2 py-2 rounded-md text-white'> Temprature</Link>
            <Link to="/FilterListApp" className='bg-gray-600 px-2 py-2 rounded-md text-white'> Filter List </Link>
            <Link to="/FormApp" className='bg-gray-600 px-2 py-2 rounded-md text-white'> Form </Link>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar