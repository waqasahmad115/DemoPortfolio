import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Progress from "../components/Progress";
import Resume from "../components/Resume";
import Sectiontitle from "../components/Sectiontitle";
import Smalltitle from "../components/Smalltitle";
import Spinner from "../components/Spinner";
import { GlobalStyle } from "./globleStyle";
import { motion } from "framer-motion";
import { Chrono } from "react-chrono";


function WorkinExperience() {
  const [skills, setSkills] = useState([]);
  const [items, setItems] = useState([]);
  const [workingExperience, setWorkingExperience] = useState([]);

useEffect(() => {
    axios.get("/api/skills").then((response) => {
      setSkills(response.data);
    });
    axios.get("/api/experience").then((response) => {
      setWorkingExperience(response.data.workingExperience);
    });
  }, []);

    
  
    
   
useEffect(()=>{
  setItems(workingExperience)
},[items])
    
 
 
  return (
    <Layout>
      <GlobalStyle />
      <Helmet>
        <title>Work Experience - Chester React Personal Portfolio Template</title>
        <meta
          name="description"
        />
      </Helmet>
      <motion.div className="container"        
      intial={{width:0}}
         animate={{width:'100%'}}
         exit={{x:window.innerWidth, transition:{duration:1}}}>
      <Suspense fallback={<Spinner /> }>

        <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <Sectiontitle title="Work Experience" />
            <Smalltitle title="Working Experience" icon="briefcase" />
            <div className="mi-resume-wrapper">



            <motion.div style={{ width: 'auto', height: '950px' }} >

            <Chrono items={items} mode="VERTICAL"
             allowDynamicUpdate  scrollable={{ scrollbar: false }}

fontSizes={{
  cardSubtitle: '0.85rem',
  cardText: '0.8rem',
  cardTitle: '0.2rem',
  title: '1rem',
}}
  theme={{


   
    primary: '#318ccc',
    secondary: '#ff0057',
    titleColor: '#318ccc',
    titleColorActive: 'white',
    cardTitleColor:'white',
    cardBgColor:'#d1d0cb',

  }}

  />
            </motion.div>
            </div>
          </div>
        </div>
      </Suspense>
      </motion.div>
    </Layout>
  );
}

export default WorkinExperience;