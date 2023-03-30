import axios from 'axios'
import React, { Suspense, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import Resume from '../components/Resume'
import Sectiontitle from '../components/Sectiontitle'
import Smalltitle from '../components/Smalltitle'
import Spinner from '../components/Spinner'
import { GlobalStyle } from './globleStyle'
import { motion } from 'framer-motion'
import { Chrono } from 'react-chrono'

function Education() {
  const [skills, setSkills] = useState([])
  const [items, setItems] = useState([]);
  const [educationExperience, setEducationExperience] = useState([])

  useEffect(() => {
    axios.get('/api/skills').then((response) => {
      setSkills(response.data)
    })
    axios.get('/api/experience').then((response) => { 
      setEducationExperience(response.data.educationExperience)
    })
  }, [])
  useEffect(()=>{
    setItems(educationExperience)
  },[items])

  return (
    <Layout>
      <GlobalStyle />
      <Helmet>
        <title>Resume - Chester React Personal Portfolio Template</title>
        <meta name="description" />
      </Helmet>
      <motion.div
        className="container"
        intial={{ width: 0 }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth, transition: { duration: 2 } }}
      >
        <Suspense fallback={<Spinner />}>
          <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
            <div className="container">
              <Sectiontitle title="Resume" />
              <Smalltitle title="Working Experience" icon="briefcase" />
              <div className="mi-resume-wrapper">
                {/* className="mi-service"  */}
                <motion.div style={{ width: 'auto', height: '1000px' }}>
                  <Chrono
                    items={items}
                    mode="VERTICAL"
                    allowDynamicUpdate
                    theme={{
                      primary: '#318ccc',
                      secondary: '#ff0057',
                      titleColor: '#318ccc',
                      titleColorActive: 'white',
                      cardTitleColor: 'white',
                      cardBgColor: '#d1d0cb',
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </Suspense>
      </motion.div>
    </Layout>
  )
}

export default Education