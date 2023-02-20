import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import ProjectsView from "../components/ProjectsView";
import SectionTitle from "../components/SectionTitle";
import Spinner from "../components/Spinner";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [portfoliosPerPage] = useState(9);

  useEffect(() => {
    let mounted = true;
    axios.get("/api/portfolios").then((response) => {
      if (mounted) {
        setProjects(response.data);
      }
    });
    return () => (mounted = false);
  }, []);

  const indexOfLastPortfolios = currentPage * portfoliosPerPage;
  const indexOfFirstPortfolios = indexOfLastPortfolios - portfoliosPerPage;
  const currentPortfolios = projects.slice(
    indexOfFirstPortfolios,
    indexOfLastPortfolios
  );

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <Helmet>
        <title>Projects </title>
        <meta
          name="description"
          content="Chester React Personal Portfolio Template Portfolios Page"
        />
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <SectionTitle title="Projects" />
            {<ProjectsView portfolios={currentPortfolios} />}
            {!(projects.length > portfoliosPerPage) ? null : (
              <Pagination
                className="mt-50"
                itemsPerPage={portfoliosPerPage}
                totalItems={projects.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            )}
          </div>
        </div>
      </Suspense>
    </Layout>
  );
}

export default Projects;
