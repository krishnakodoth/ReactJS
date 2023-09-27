import React, { ReactNode } from "react";
import classes from "../../styles/Card.module.css";

const Card = ({ children }: { children: ReactNode }) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;
