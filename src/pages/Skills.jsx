import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Sectiontitle from "../components/Sectiontitle";
import SkillCard from "../components/SkillCard"
import Spinner from "../components/Spinner";
import { GlobalStyle } from "./globleStyle";
import { motion } from "framer-motion";
const Skills = () => {
  const [mySkills, setMySkills] = useState([]);
  const [programing, setPrograming] = useState([]);
  const [database, setDatabase] = useState([]);
  const [other, setOther] = useState([]);
  useEffect(() => {
    axios.get("/api/myskills").then((response) => {
      setMySkills(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get("/api/programinSkills").then((response) => {
      setPrograming(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get("/api/databases").then((response) => {
      setDatabase(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get("/api/other").then((response) => {
      setOther(response.data);
    });
  }, []);
  return (
    <Layout>
      <GlobalStyle />
      <Helmet>
        <title>Resume -Skills List</title>
        <meta
          name="description"
          content="Maxon Corvil Skills Page"
        />
      </Helmet>

      <motion.div className="mi-section mi-padding-top" intial={{width:0}}
         animate={{width:'100%'}}
         exit={{x:window.innerWidth, transition:{duration:1}}}>
                <Sectiontitle title="Skills" />
          <div className="mi-section mi-padding-top">
      
      <Sectiontitle title="Programing Languages" />
      <div  className="mi-resume-wrapper">
  <div className="container">

      <div className="card_Container" >
        {mySkills.map((skill) => {
          return(
          <div key={skill.title} >
            <SkillCard skill={skill}/>
          </div>)
})}
      </div>
      </div>
      </div>
      </div>


              <div className="mi-section mi-padding-top">
      
              <Sectiontitle title="Frameworks" />
              <div  className="mi-resume-wrapper">
          <div className="container">
       
              <div className="card_Container" >
                {programing.map((skill) => {
            
                  return(
                  <div key={skill.title} >
                    <SkillCard skill={skill}/>
                  </div>)
})}
              </div>
              </div>
              </div>
              </div>

              <div className="mi-section mi-padding-top">
      
      <Sectiontitle title="database" />
      <div  className="mi-resume-wrapper">
  <div className="container">

      <div className="card_Container" >
        {database.map((skill) => {
          return(
          <div key={skill.title} >
            <SkillCard skill={skill}/>
          </div>)
})}
      </div>
      </div>
      </div>
      </div>

      <div className="mi-section mi-padding-top">
      
      <Sectiontitle title="Others" />
      <div  className="mi-resume-wrapper">
  <div className="container">

      <div className="card_Container" >
        {other.map((skill) => {
          return(
          <div key={skill.title} >
            <SkillCard skill={skill}/>
          </div>)
})}
      </div>
      </div>
      </div>
      </div>
        </motion.div>
    </Layout>
  )
}

export default Skills