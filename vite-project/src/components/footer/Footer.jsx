import classes from "../footer/Footer.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { MdConnectWithoutContact } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className={classes.footerSection}>
      <div className={classes.card}>
        <div className={classes.socialLinks}>
          <a href="https://www.linkedin.com/in/ganesh-yenurkar-374915199/">
            <FaLinkedin className={classes.socialIcons} />{" "}
          </a>
          <a href="https://github.com/yenurkar-ganesh" target="blank">
            <FaGithub className={classes.socialIcons} />
          </a>
          <a href="/contact">
            <MdConnectWithoutContact className={classes.socialIcons} />{" "}
          </a>
          <a href="https://www.instagram.com/ganesh.yenurkar_/" target="blank">
            <FaInstagram className={classes.socialIcons} />
          </a>
        </div>
        <div className={classes.socialInfo}>
          Coded in Visual Studio Code by yours truly. Built with React.js,
          NodeJs, MongoDb & CSS, deployed with Vercel. Design inspired by
          Brittany Chiang.
        </div>
      </div>
    </section>
  );
};

export default Footer;
