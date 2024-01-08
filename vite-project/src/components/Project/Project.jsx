// import React from "react";
import classes from "../Project/Project.module.css";

const Project = () => {
  return (
    <div className={classes.projectSection}>
      <div className={classes.card}>
        <img
          className={classes.cardImg}
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="project Name"
        />
        <div className="cardInfo">
          <h4 className={classes.cardTitle}>Blog Website</h4>
          <p className={classes.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            delectus! Pariatur voluptatem deserunt repudiandae nemo error,
            tenetur cupiditate doloremque eum nobis qui dolorum corporis ex
            aspernatur harum! Delectus eligendi veritatis provident dolores hic
            aspernatur nemo praesentium animi ex earum, amet illo sunt.
          </p>
          <p className={classes.cardStack}>
            <h4>Stacks : </h4> NodeJs, ExpressJs, MongoDB, ReactJs{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
