import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import TrackVisibility from "react-on-screen";
import Layout from "../components/Layout";
import Progress from "../components/Progress";
import ResumeSection from "../components/ResumeSection";
import SectionTitle from "../components/SectionTitle";
import SmallTitle from "../components/SmallTitle";
import Spinner from "../components/Spinner";

const Resume = () => {
  const [skills, setSkills] = useState([]);
  const [workingExperience, setWorkingExperience] = useState([]);
  const [educationExperience, setEducationExperience] = useState([]);

  useEffect(() => {
    axios.get("/api/skills").then((response) => {
      setSkills(response.data);
    });
    axios.get("/api/experience").then((response) => {
      setWorkingExperience(response.data.workingExperience);
      setEducationExperience(response.data.educationExperience);
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Resume - Nazar Kruk React Personal Portfolio</title>
        <meta
          name="description"
          content="Nazar Kruk Web Developer Portfolio Resume Page"
        />
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <div className="mi-skills-area mi-section mi-padding-top">
          <div className="container">
            <SectionTitle title="My Skills" />
            <div className="mi-skills">
              <div className="row mt-30-reverse">
                {skills.map((skill) => (
                  <TrackVisibility
                    once
                    className="col-lg-6 mt-30"
                    key={skill.title}
                  >
                    <Progress title={skill.title} percentage={skill.value} />
                  </TrackVisibility>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <SectionTitle title="Resume" />
            <SmallTitle title="Working Experience" icon="briefcase" />
            <div className="mi-resume-wrapper">
              {workingExperience.map((workingExp) => (
                <ResumeSection key={workingExp.id} resumeData={workingExp} />
              ))}
            </div>
            <div className="mt-30"></div>
            <SmallTitle title="Educational Qualifications" icon="book" />
            <div className="mi-resume-wrapper">
              {educationExperience.map((educatonExp) => (
                <ResumeSection key={educatonExp.id} resumeData={educatonExp} />
              ))}
            </div>
          </div>
        </div>
      </Suspense>
    </Layout>
  );
};

export default Resume;
