import { useEffect, useState } from "react";
import classes from "../ProjectArchive/ProjectArchive.module.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProjectArchive = ({ title, buildWith, linkedInLink, createdAt }) => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3100/api/projects/`)
      .then((response) => response.json())
      .then((project) => setProject(project));
  });
  return (
    <>
      <section className={classes.archiveSection}>
        <div className={classes.archiveInfo}>
          <Link className={classes.backToHome} to="/">
            <FaArrowLeftLong className={classes.backArrow} />
            Ganesh Yenurkar
          </Link>
          <h1 style={{ fontSize: "2.1rem", color: "aliceblue" }}>
            All Projects
          </h1>
        </div>
        <div className={classes.projectSection}>
          <table className={classes.projectTable}>
            <thead className={classes.tableHead}>
              <tr>
                <th>Year</th>
                <th>Project</th>
                <th>Build With</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {project.length > 0 &&
                project.map((project, id) => (
                  <tr key={id} className={classes.projectRow}>
                    <td>{project.createdAt}</td>
                    <td>{project.title}</td>
                    <td className={classes.stackTD}>
                      {project.buildWith.map((stack, id) => (
                        <span className={classes.projectStack} key={id}>
                          {stack}
                        </span>
                      ))}
                    </td>
                    <td>
                      {project.linkedInLink.startsWith("/") ? (
                        <Link to={project.linkedInLink}>
                          {project.linkedInLink}
                        </Link>
                      ) : (
                        <a
                          href={project.linkedInLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.linkedInLink}
                        </a>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default ProjectArchive;
