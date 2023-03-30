import React, { useState } from 'react'
import * as Icon from 'react-feather'
import { BrowserRouter, Route, Routes, HashRouter, useLocation } from 'react-router-dom'
import './App.scss'
import AnimationRoutes from './components/AnimationRoutes'

function App() {

  return (

    <HashRouter>
      
      <AnimationRoutes />
    </HashRouter>
  )
}

export default App
