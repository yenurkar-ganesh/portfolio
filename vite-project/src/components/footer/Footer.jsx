import classes from "../footer/Footer.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { MdConnectWithoutContact } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className={classes.footerSection}>
      <div className={classes.card}>
        <div className={classes.socialLinks}>
          <a href="#">
            {" "}
            <FaLinkedin className={classes.socialIcons} />{" "}
          </a>
          <a href="#">
            <FaGithub className={classes.socialIcons} />
          </a>
          <a href="/contact">
            <MdConnectWithoutContact className={classes.socialIcons} />{" "}
          </a>
          <a href="#">
            <FaInstagram className={classes.socialIcons} />
          </a>
        </div>
        <div className={classes.socialInfo}>
          Coded in Visual Studio Code by yours
          truly. Built with React.js, NodeJs, MongoDb & CSS, deployed with
          Vercel. Design inspired by Brittany Chiang.
        </div>
      </div>
    </section>
  );
};

export default Footer;
