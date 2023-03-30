import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import PortfolioView from "../components/PortfolioView";
import Sectiontitle from "../components/Sectiontitle";
import Spinner from "../components/Spinner";
import { GlobalStyle } from "./globleStyle";
import { motion } from "framer-motion";
function Portfolio() {
  const [portfolio, setPortfoio] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [portfolioPerPage] = useState(9);

  useEffect(() => {
    let mounted = true;
    axios.get("/api/portfolio").then((response) => {
      if (mounted) {
        setPortfoio(response.data);
      }
    });
    return () => (mounted = false);
  }, []);

  const indexOfLastPortfolio = currentPage * portfolioPerPage;
  const indexOfFirstPortfolio = indexOfLastPortfolio - portfolioPerPage;
  const currentPortfolio = portfolio.slice(
    indexOfFirstPortfolio,
    indexOfLastPortfolio
  );

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
       <GlobalStyle />

      <Helmet>
        <title>Portfolio - Chester React Personal Portfolio Template</title>
        <meta
          name="description"
          content="Chester React Personal Portfolio Template Portfolio Page"
        />
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <motion.div className="mi-about mi-section mi-padding-top mi-padding-bottom"        intial={{width:0}}
         animate={{width:'100%'}}
         exit={{x:window.innerWidth, transition:{duration:1}}}>
          <div className="container">
            <Sectiontitle title="Portfolio" />
            <div  className="mi-resume-wrapper">
  <div className="mi-padding-top">
            {<PortfolioView portfolio={currentPortfolio} />}
            {!(portfolio.length > portfolioPerPage) ? null : (
              <Pagination
                className="mt-50"
                itemsPerPage={portfolioPerPage}
                totalItems={portfolio.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            )}
          </div></div></div>
        </motion.div>
      </Suspense>
    
    </Layout>
  );
}

export default Portfolio;
