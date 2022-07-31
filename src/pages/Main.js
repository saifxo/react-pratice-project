import React from 'react'
import CounterApp from '../components/Counter'
import FilterListApp from '../components/FilterListApp'
import TempratureApp from '../components/TempratureApp'
import FormApp from "../components/FormApp"
import Navbar from "../components/Navbar"
import {Route, Routes, BrowserRouter,} from "react-router-dom"
import QuizApp from '../components/QuizApp'
import {Toaster} from "react-hot-toast"
import ReactAuthApp from '../components/ReactAuthApp'
import {Auth0Provider,useAuth0} from '@auth0/auth0-react'
function Main() {
  const domain=process.env.REACT_APP_AUTH0_DOMAIN
    const clientId=process.env.REACT_APP_AUTH0_CLIENT_ID
  return (
    <BrowserRouter>
    <Navbar/>
    <Toaster />    
      <Routes>
          <Route path='/' element={<Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}><ReactAuthApp/></Auth0Provider>}/> 
          <Route path='/tempratureApp' element={<TempratureApp/>}/>
          <Route path='/FilterListApp' element={<FilterListApp/>}/>
          <Route path='/FormApp' element={<FormApp/>}/>
          <Route path='/QuizApp' element={<QuizApp/>}/>
          <Route path='/CounterApp' element={<CounterApp />}/>
      </Routes>
    </BrowserRouter>

  )
}

export default Main