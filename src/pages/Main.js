import React from 'react'
import CounterApp from '../components/Counter'
import FilterListApp from '../components/FilterListApp'
import TempratureApp from '../components/TempratureApp'
function Main() {
  return (
    <div className="bg-black">
        <hr/>
        <CounterApp/>
        <hr className='mb-5'/>
        <TempratureApp/>
        <hr className='mt-5'/>
        <FilterListApp/>
        <hr className='mt-5'/>
    </div>
  )
}

export default Main