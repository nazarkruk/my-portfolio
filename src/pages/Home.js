import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-12">
            <div className="mi-home-content">
              <h1>
                Hi, I am <span className="color-theme">Nazar Kruk</span>
              </h1>
              <p>This is paragraph about me</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
