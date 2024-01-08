// import React from 'react';
import classes from "../Hero/Hero.module.css";
import Project from "../Project/Project.jsx";
import { SiMongodb, SiExpress, SiReact } from "react-icons/si";
import { FaNodeJs, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BiSolidFileArchive } from "react-icons/bi";

const Hero = () => {
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
            {" "}
            <div className={classes.line}></div> ABOUT ME
          </h3>
          <p>
            Hey there, I'm Ganesh Yenurkar, a coding enthusiast and tech maestro
            with a penchant for crafting digital wonders. My expertise lies in
            sculpting dynamic server-side applications using the wizardry of
            Node.js and optimizing MongoDB databases for peak performance.
          </p>
          <p>
            Certified in ReactJs, JavaScript Basics, and Version Control, I
            don't just build websites; I create digital experiences. The Blog
            Website is my canvas where dynamic user interfaces dance to the
            rhythm of innovation, and security measures stand guard over your
            precious data.
          </p>
          <p>
            So, welcome to my portfolio – a realm where code meets creativity,
            and the possibilities are as limitless as your imagination. Let's
            embark on a digital journey together and turn your ideas into
            digital marvels!
          </p>

          <section className={classes.projectSection}></section>
          <h3 className={classes.sectionsName}>
            <div className={classes.line}></div> PROJECTS
          </h3>
          <Project />
          <Project />
          <Project />
          <h4 className={classes.projectArchive}>
            {" "}
            <a href="">View Full Project Archive</a>{" "}
            <BiSolidFileArchive
              style={{
                width: "21px",
                height: "21px",
              }}
            />
          </h4>
        </section>
      </section>
      <section className={classes.marqueeSection}>
        <h1>Tech Stack</h1>
        <p style={{width: '80%'}}>
          Currently immersed in the realm of React.js and Node.js, crafting
          engaging user interfaces and robust server-side functionalities. My
          toolkit includes MongoDB for seamless and scalable data management,
          ensuring a dynamic and efficient tech stack.
        </p>
        <div className={classes.techStack}>
          <SiMongodb className={classes.techs} />{" "}
          <SiExpress className={classes.techs} />{" "}
          <SiReact className={classes.techs} />{" "}
          <FaNodeJs className={classes.techs} />
          <FaPython className={classes.techs} />
          <IoLogoJavascript className={classes.techs} />
        </div>
      </section>
    </>
  );
};

export default Hero;
