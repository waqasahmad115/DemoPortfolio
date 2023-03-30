import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, HashRouter, useLocation } from 'react-router-dom'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Notfound from '../pages/Notfound'
import Portfolio from '../pages/Portfolio'
import Skills from '../pages/Skills'
import Education from '../pages/Education'
import WorkingExp from '../pages/WorkinExp'
import { AnimatePresence } from 'framer-motion'

function AnimationRoutes() {
  const location = useLocation()
  const [lightMode, setLightMode] = useState(false)
  lightMode ? document.body.classList.add('light') : document.body.classList.remove('light')
  console.log(lightMode)

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path={`/`} index element={<Home lightMode={lightMode} />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="skills" element={<Skills />} />
        <Route path="education" element={<Education />} />
        <Route path="workingExp" element={<WorkingExp />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </AnimatePresence>
  )
}
export default AnimationRoutes
