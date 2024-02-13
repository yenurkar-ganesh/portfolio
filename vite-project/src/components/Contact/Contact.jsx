// import React from "react";
import classes from "../Contact/Contact.module.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer.jsx";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendMail = (e) => {
    e.preventDefault();

    try {
      emailjs
        .sendForm(
          "service_3r2gq6h",
          "template_jjn7asq",
          form.current,
          "ofRRlGw1pSxD3-Zf0"
        )
        .then((result) => {
          if (result.ok) {
            toast.error(`Failed to send message.`);
          } else {
            toast.success(`Message send successfully.`);
          }
        });
    } catch (error) {
      toast.error(`Error while sending. Please try again.`);
    }
    e.target.reset();
  };

  return (
    <>
      <section className={classes.contactSection}>
        <div className={classes.archiveInfo}>
          <Link className={classes.backToHome} to="/">
            <FaArrowLeftLong className={classes.backArrow} />
            Ganesh Yenurkar
          </Link>
          <h1 style={{ fontSize: "2.1rem", color: "aliceblue" }}>CONTACT ME</h1>
        </div>

        <div className={classes.contactForm}>
          <section className={classes.card}>
            <div className={classes.cardOverlay} />
            <section className={classes.contactInfo}>
              <h2>For Enquiry</h2>
              <p>+91 8007891084</p>
              <p>ganeshyenurkar4@gmail.com</p>
            </section>
          </section>
          <ToastContainer />

          <form className={classes.form} ref={form} onSubmit={sendMail}>
            <h1>Leave a message..</h1>
            <input
              className={classes.inputs}
              placeholder="Your Name"
              type="text"
              name="user_name"
            />

            <input
              className={classes.inputs}
              placeholder="Your Email"
              type="email"
              name="user_email"
            />

            <input
              className={classes.inputs}
              placeholder="Subject"
              type="text"
              name="subject"
            />

            <textarea
              className={classes.inputs}
              placeholder="Message.."
              name="message"
              cols="30"
              rows="15"
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
