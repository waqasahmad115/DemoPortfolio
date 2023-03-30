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
  useEffect(() => {
    axios.get("/api/myskills").then((response) => {
      setMySkills(response.data);
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
      <motion.div className=" mi-section mi-padding-top"        intial={{width:0}}
         animate={{width:'100%'}}
         exit={{x:window.innerWidth, transition:{duration:1}}}>
          <div className="container">
            <Sectiontitle title="Skills" />
            <div className="">
              <div className="card_Container ">
                {mySkills.map((skill) => (
                  <div key={skill.title}>
                    <SkillCard skill={skill}/>
                  </div>
                ))}
              </div>
            </div>
 
          </div>
        </motion.div>
    </Layout>
  )
}

export default Skills