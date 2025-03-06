import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import POS from './pages/POS'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/pos' element={<POS />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App