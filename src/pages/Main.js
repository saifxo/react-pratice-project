import React from 'react'
import CounterApp from '../components/Counter'
import FilterListApp from '../components/FilterListApp'
import TempratureApp from '../components/TempratureApp'
import FormApp from "../components/FormApp"
import Navbar from "../components/Navbar"
import {Route, Routes, BrowserRouter} from "react-router-dom"
function Main() {
  return (
    <BrowserRouter>
    <Navbar/>    
      <Routes>
          <Route path='/' element={<CounterApp/>}/>
          <Route path='/tempratureApp' element={<TempratureApp/>}/>
          <Route path='/FilterListApp' element={<FilterListApp/>}/>
          <Route path='/FormApp' element={<FormApp/>}/>
      </Routes>   
    </BrowserRouter>

  )
}

export default Main