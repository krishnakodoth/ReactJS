import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  MutableRefObject,
  forwardRef,
} from "react";
import classes from "../../styles/Input.module.css";

type inputType = {
  id: string;
  type?: string;
  placeholder?: string;
};

const Input = forwardRef(
  ({
    input,
    label,
    ref,
  }: {
    input: inputType;
    label: string;
    ref: MutableRefObject<HTMLInputElement>;
  }) => {
    return (
      <div className={classes.input}>
        <label htmlFor={input.id}>{label}</label>
        <input {...input} ref={ref} />
      </div>
    );
  }
);

export default Input;
