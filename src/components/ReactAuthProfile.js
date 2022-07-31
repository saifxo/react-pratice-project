import React from 'react'
import {useAuth0} from '@auth0/auth0-react'

function ReactAuthProfile() {
    const {user,isAuthenticated}=useAuth0()
  return (
    isAuthenticated && (
    <div className='flex justify-center items-center flex-col'>    
        <div className='flex flex-row justify-center items-center space-x-8 px-10 py-10 mt-5  bg-gray-600 rounded-lg shadow-lg'>
            <div className='flex flex-col justify-center items-center'><h1 className='text-xl font-semibold text-white' >Welcome! {user.name}</h1> <h1 className='text-sm  text-white'>{user.email}</h1></div>
            <div className='flex justify-center items-center'><img className='rounded-full h-20 w-20' src={user.picture}/></div>
            
        </div>
    </div>

    
  ))
}

export default ReactAuthProfile