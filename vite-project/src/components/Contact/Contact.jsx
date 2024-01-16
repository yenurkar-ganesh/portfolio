// import React from "react";
import classes from "../Contact/Contact.module.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Contact = () => {
  const handleChange = () => {};
  return (
    <section className={classes.contactSection}>
      <div className={classes.archiveInfo}>
        <Link className={classes.backToHome} to="/">
          <FaArrowLeftLong className={classes.backArrow} />
          Ganesh Yenurkar
        </Link>
        <h1 style={{ fontSize: "2.1rem", color: "aliceblue" }}>CONTACT ME</h1>
      </div>

      <div className="contactForm">
        {/* <p>
          Have a question, collaboration idea, or just want to chat? Drop me an
          email, and let's make things happen together!
        </p> */}
        <form className={classes.form}>
          <h1>Leave a message..</h1>
          <input
            className={classes.inputs}
            placeholder="Your Name"
            type="text"
            name="name"
            onChange={handleChange}
          />

          <input
            className={classes.inputs}
            placeholder="Your Email"
            type="email"
            name="email"
            onChange={handleChange}
          />

          <textarea
            className={classes.inputs}
            placeholder="Message.."
            name="message"
            onChange={handleChange}
            cols="30"
            rows="20"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
