import React, { ReactNode } from "react";
import classes from "../../styles/Button.module.css";

const Button = ({
  children,
  styles,
  ...rest
}: {
  styles?: string[];
  children: ReactNode;
  onClick?: () => void;
}) => {
  let buttonClassNames: string[] = [];

  styles?.map((row) => {
    buttonClassNames.push(classes[row]);
  });

  return (
    <button
      className={`${classes.button} ${buttonClassNames.join(" ")}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
