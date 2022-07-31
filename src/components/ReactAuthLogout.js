import React from 'react'
import {useAuth0} from '@auth0/auth0-react'

function ReactAuthLogout() {
    const {logout,isAuthenticated}=useAuth0()
  return (
    isAuthenticated && (
    <div className='flex justify-center items-center mt-10'>
        <button onClick={()=>logout()} className='bg-gray-600 hover:bg-gray-700 px-10 py-5 rounded-md hover:scale-110 transition-all ease-out delay-30  text-white'>Log out</button>
    </div>
  ))
}

export default ReactAuthLogout