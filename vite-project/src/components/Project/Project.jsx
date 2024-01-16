// import React from "react";
import classes from "../Project/Project.module.css";

const Project = ({ linkedInLink, title, image, description, buildWith }) => {
  return (
    <div className={classes.projectSection}>
      <div className={classes.card}>
        <img
          className={classes.cardImg}
          src={`http://localhost:3100/uploads/${image}`}
          alt={title}
        />
        <div className="cardInfo">
          <h4 className={classes.cardTitle}>{title}</h4>
          <p className={classes.cardDescription}>{description}</p>
          <p className={classes.cardStack}>
            {buildWith.map((stack, index) => (
              <span className={classes.stack} key={index}>
                {stack}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
