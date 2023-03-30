import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Socialicons from "../components/Socialicons";
import Spinner from "../components/Spinner";
import HomeBackground from "../components/HomeBackground";
import { GlobalStyle } from "./globleStyle";
import { motion } from "framer-motion";

function Home({ lightMode }) {
  const [information, setInformation] = useState("");

  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
    });
  }, []);

  return (
    <Layout 
   
    >
      <GlobalStyle />
      <Helmet>
        <title>Home - Maxon Corvil Personal Portfolio</title>
        <meta
          name="description"
          content="Maxon Corvil React Personal Portfolio Homepage"
        />
      </Helmet>


      <Suspense fallback={<Spinner />}>
        <motion.div
         initial={{ opacity: 0, y: 200 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: -100 }}
         transition={{ duration: 1 }} >
        <div className="mi-home-area mi-padding-section" >
          <HomeBackground/>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-12">
                <div className="mi-home-content">
              
                  <h1>
                  Hi,I'm
                    <span className="color-theme "> {information.name}</span>
                  </h1>
                  
                  <p>{information.aboutContent}</p>
             
                  <Socialicons bordered />
                     <a href={information.cvfile} className="mi-button" target="_blank">
                    Download Resume 
                  </a>
                  
                </div>
                
              </div>

            </div>

          </div>
   
        </div>
        </motion.div>
      </Suspense>
    </Layout>
  );
}

export default Home;
