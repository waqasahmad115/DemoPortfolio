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

function WorkExperience() {
  const [skills, setSkills] = useState([])
  const [workingExperience, setWorkingExperience] = useState([])
  const [educationExperience, setEducationExperience] = useState([])

  useEffect(() => {
    axios.get('/api/skills').then((response) => {
      setSkills(response.data)
    })
    axios.get('/api/experience').then((response) => {
      setWorkingExperience(response.data.workingExperience)
      setEducationExperience(response.data.educationExperience)
    })
  }, [])

  const items = [
    {
      title: '2018 - Present',
      cardTitle: 'Frontend Web Developer',
      cardDetailedText: [
        'Abc Company',

        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.',
      ],
    },
    {
      title: '2016 - 2018',
      cardTitle: 'Frontend Web Developer',
      cardDetailedText: [
        'CBA Company',

        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.',
      ],
    },
    {
      title: '2014 - 1016',
      cardTitle: 'UI/UX Designer',
      cardDetailedText: [
        'Example Company',
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.',
      ],
    },
  ]

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
        exit={{ x: window.innerWidth, transition: { duration: 1 } }}
      >
        <Suspense fallback={<Spinner />}>
          <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
            <div className="container">
              <Sectiontitle title="Resume" />
              <Smalltitle title="Working Experience" icon="briefcase" />
              <div className="mi-resume-wrapper">

                <motion.div style={{ width: 'auto', height: '1000px' }}>
                  <Chrono
                    items={items}
                    mode="VERTICAL"
                    slideShow
                    slideItemDuration={4500}
                    slideShowType="reveal"
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

export default WorkExperience