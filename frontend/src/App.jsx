import React from 'react'
import "./app.css"
import { Route, Routes } from 'react-router'
import Landing from './components/Landing'

const App = () => {
  return (
    <Routes>
      <Route exact path='/*' element = { <Landing/> } />
    </Routes>
  )
}

export default App
