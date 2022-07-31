import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
function ReactAuthLogin() {
    const {loginWithRedirect, isAuthenticated}=useAuth0()
  return (
    <div>
      {!isAuthenticated &&(
      <div className='flex justify-center items-center -mt-5 '><h1 className=" font-bold text-2xl p-5 font-Edu mt-5 bg-gray-300 text-black rounded-lg shadow-md">
    {"React Auth App With Auth 0"}
  </h1></div>
      )}
    {!isAuthenticated &&(
    <div className='flex justify-center items-center mt-20'>
        <button onClick={()=>loginWithRedirect()} className='bg-gray-600 hover:bg-gray-700 px-10 py-5 rounded-md hover:scale-110 transition-all ease-out delay-30  text-white'>Log in</button>
    </div>
    )}
    </div>
  )
}

export default ReactAuthLogin