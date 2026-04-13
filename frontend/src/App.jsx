import React from 'react';
import Home from './components/Home.jsx';
import {Routes,Route}  from "react-router-dom";
import Course from './course/Course.jsx';
import Singup from './components/Singup.jsx';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/courses' element={<Course/>} />
      <Route path='/singup' element={<Singup />} />
    </Routes>
  )
}

export default App
