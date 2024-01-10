// import React from 'react';
import classes from "../Hero/Hero.module.css";
import Project from "../Project/Project.jsx";
import Footer from "../footer/Footer.jsx";
import { SiMongodb, SiExpress, SiReact } from "react-icons/si";
import { FaNodeJs, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BiSolidFileArchive } from "react-icons/bi";
import { useEffect, useState } from "react";
import { about } from "../Data/data.js";
import { Link } from "react-router-dom";

const Hero = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    try {
      fetch(`http://localhost:3100/api/projects?limit=2`)
        .then((response) => response.json())
        .then((projects) => {
          setProjects(projects);
        });
    } catch (error) {
      console.log(`${error} Error While Fetching Data!!`);
    }
  }, []);
  return (
    <>
      <section className={classes.heroSection}>
        <div className={classes.mySection}>
          <h1>Ganesh Yenurkar</h1>
          <p className={classes.aboutMe}>Lead Engineer at Upstatement</p>
          <p>
            I build pixel-perfect, accessible products for the web and beyond.
          </p>
        </div>

        <section className={classes.scrollingSection}>
          <h3 className={classes.sectionsName}>
            <div className={classes.line} /> ABOUT ME
          </h3>
          {about.length > 0 &&
            about.map((para, index) => {
              return (
                <p key={index} className={classes.paragraphs}>
                  {para}
                </p>
              );
            })}

          <section className={classes.projectSection}>
            <h3 className={classes.sectionsName}>
              <div className={classes.line} /> PROJECTS
            </h3>

            {projects.length > 0 &&
              projects.map((proj, id) => <Project key={id} {...proj} />)}

            <h3 className={classes.sectionsName}>
              <div className={classes.line} />{" "}
              <Link
                style={{ textDecoration: "none", color: "#e2e8f0" }}
                to="/projectArchive"
              >
                View Full Project Archive
              </Link>
              <BiSolidFileArchive
                style={{
                  width: "21px",
                  height: "21px",
                }}
              />
            </h3>
          </section>
        </section>
      </section>
      <section className={classes.marqueeSection}>
        <h1>Tech Stack</h1>
        <p style={{ width: "80%" }}>
          Currently immersed in the realm of React.js and Node.js, crafting
          engaging user interfaces and robust server-side functionalities. My
          toolkit includes MongoDB for seamless and scalable data management,
          ensuring a dynamic and efficient tech stack.
        </p>
        <div className={classes.techStack}>
          <SiMongodb className={classes.techs} />{" "}
          <SiExpress className={classes.techs} />
          <SiReact className={classes.techs} />
          <FaNodeJs className={classes.techs} />
          <FaPython className={classes.techs} />
          <IoLogoJavascript className={classes.techs} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Hero;
