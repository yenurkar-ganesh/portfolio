// import React from 'react'
import classes from "../ErrorPage/ErrorPage.module.css";
const ErrorPage = () => {
  return (
    <section className={classes.errorSection}>
      <img
        src="/undraw_Not_found_re_bh2e.png"
        alt="404 Not Found"
      />
      <h1>404, The Page you are Looking For Not Found!!</h1>
    </section>
  );
};

export default ErrorPage;
