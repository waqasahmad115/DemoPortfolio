import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedinIn, faGithub, } from '@fortawesome/free-brands-svg-icons'


function Socialicons(props) {
  const [socialLinks, setSocialLinks] = useState({});

  useEffect(() => {
    axios.get('/api/information')
      .then(response => {
        setSocialLinks(response.data.socialLinks);
      })
  }, [])

  return (
    <>
    <style>
    {`
    .links_ul{
      display:flex;
      flex-wrap:wrap;

    }
     .text_container{
      background: #e8e8e3;
      border-radius: 18px;
       height:170px;
        width:140px;
        margin:6px
  }
  .text_center{
    position: relative;
    float: left;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
    `}
 </style>


    <ul className="links_ul " >
      <div className="text_container" >
      <li className="text_center ">
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.linkedin}>
            <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
        </a>
      </li>
      </div>
      <div className="text_container" >
      <li className="text_center">
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.github}>
            <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
      </li>
      </div>
      <div className="text_container" >
      <li className="text_center">
        <a rel="noopener noreferrer" href={socialLinks.portfolio}>
            <FontAwesomeIcon icon={faBriefcase} className="icon"/>
        </a>
      </li>
      </div>
      {!socialLinks.github ? null :       <div className="text_container" >
      <li className="text_center">
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.github}>
            <FontAwesomeIcon icon={faFacebookF} className="icon" />
        </a>
      </li>
      </div>}
    </ul>
    </>
  );
}

export default Socialicons;
