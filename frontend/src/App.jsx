import React from 'react'
import "./app.css"
import { Outlet, Route, Routes } from 'react-router'
import Landing from './components/Landing'

const App = () => {
  return (
    <Outlet />
  )
}

export default App
