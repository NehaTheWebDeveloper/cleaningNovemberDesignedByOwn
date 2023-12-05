import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import LandingPage from './Screens/LandingPage/LandingPage';


const PageRoutes = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route element={<Login/>} path='/login'/>
        <Route element={<Signup/>} path='/signup'/>
        <Route element={<LandingPage/>} path='/landingpage'/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default PageRoutes