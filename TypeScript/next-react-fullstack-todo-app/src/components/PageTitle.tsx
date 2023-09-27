import React from "react";
import classes from "../styles/PageTitle.module.css";

const PageTitle = ({ title }: { title: string }) => {
  return <h2 className={classes.pageTitle}>{title}</h2>;
};

export default PageTitle;
