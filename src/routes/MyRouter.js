import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../screens/About'
import Detail from '../screens/Detail'
import Home from '../screens/Home'

const MyRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/detail/:id' element={<Detail />}/>
    </Routes>
  )
}

export default MyRouter