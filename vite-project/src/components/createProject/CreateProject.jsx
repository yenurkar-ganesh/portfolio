import { useState } from "react";
import classes from "../createProject/CreateProject.module.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateProject = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(0);
  const [stack, setStack] = useState([]);
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("title", title);
    data.append("description", description);
    data.append("buildWith", JSON.stringify(stack));
    data.append("image", file);
    data.append("linkedInLink", url);
    data.append("buildYear", new Date(date));

    try {
      const response = await fetch("http://localhost:3100/api/projects", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        toast.success("Project created successfully!");
        setTimeout(() => {
          setRedirect(true);
        }, 3500);
      } else {
        console.error("Failed to create Project:");
        toast.error("Failed to create a project. Please Try Again.");
      }
    } catch (error) {
      console.error("Error creating project:", error);
      toast.error("Error creating project. Please try again.");
    }
  };

  return (
    <>
      <main>
        <div className={classes.archiveInfo}>
          <Link className={classes.backToHome} to="/">
            <FaArrowLeftLong className={classes.backArrow} />
            Ganesh Yenurkar
          </Link>
          <h1 style={{ fontSize: "2.1rem", color: "aliceblue" }}>
            Create Projects
          </h1>
        </div>
        <section className={classes.createSection}>
          <ToastContainer />
          <form onSubmit={submitHandler} className={classes.projectForm}>
            <h1>New Project</h1>
            <input
              className={classes.formInput}
              type="text"
              placeholder="Title of Project"
              required
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <input
              className={classes.formInput}
              type="date"
              placeholder="Project Build Year"
              onChange={(event) => setDate(event.target.value)}
            />
            <input
              className={classes.formInput}
              type="text"
              placeholder="Tech Stack"
              value={stack.join(",")}
              onChange={(event) =>
                setStack(
                  event.target.value.split(",").map((item) => item.trim())
                )
              }
            />
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              className={classes.formInput}
              name="4"
              cols="30"
              rows="10"
              required
            ></textarea>
            <input
              onChange={(event) => setFile(event.target.files[0])}
              className={classes.formInput}
              type="file"
              placeholder="Image of Project"
              required
            />
            <input
              onChange={(event) => setUrl(event.target.value)}
              className={classes.formInput}
              type="url"
              placeholder="URL of Project"
            />
            <button>Create Project</button>
          </form>
        </section>
        {redirect && <Navigate to={"/projectArchive"} />}
      </main>
    </>
  );
};

export default CreateProject;
