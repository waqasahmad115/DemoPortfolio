import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LineIcon from 'react-lineicons'
import ProgressiveImage from 'react-progressive-image'
import { Link, NavLink } from 'react-router-dom'
import ToggleSwitch from './toggleSwitch';

function Header() {
  const [information, setInformation] = useState('')
  const [navigationToggler, setNavigationToggler] = useState(false)

  const handleNavigationToggler = () => {
    setNavigationToggler(!navigationToggler)
  }

  useEffect(() => {
    axios.get('/api/information').then((response) => {
      setInformation(response.data)
    })
  }, [])

  return (
    <nav className={navigationToggler ? 'mi-header is-visible' : 'mi-header'}>
      <button onClick={handleNavigationToggler} className="mi-header-toggler">
        {!navigationToggler ? <LineIcon name="menu" /> : <LineIcon name="close" />}
      </button>
      <div className="mi-header-inner">
        <div className="mi-header-image">
          <Link to="/">
            <ProgressiveImage src={information.brandImage} placeholder="/images/about-image-placeholder.png">
              {(src) => <img src={src} alt="brandimage" />}
            </ProgressiveImage>
          </Link>
        </div>

        <ul className="mi-header-menu">
          <li>
            <NavLink to="/" end>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={{pathname:"/about",state:{name:"from home page"}}}>
              <span>About</span>
            </NavLink>
          </li>
         
          <li>
            <NavLink to="/education">
              <span>Education</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/workingExp">
              <span>Work Experience</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills">
              <span>Skills</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">
              <span>Portfolio</span>
            </NavLink>
          </li>
         
          <li>
            <NavLink to="/contact">
              <span>Contact Me</span>
            </NavLink>
          </li>
        </ul>
        
         <div className="mi-header-copyright">  </div>   
        
     
        <p className="mi-header-copyright"> <ToggleSwitch/>
          {new Date().getFullYear()} &copy;
          <b>
            <a rel="noopener noreferrer" target="_blank" href="">
            Maxon Corvil
            </a>
          </b>
        </p>

      </div>

     
    </nav>
  )
}

export default Header
