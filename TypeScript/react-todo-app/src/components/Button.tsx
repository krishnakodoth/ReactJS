import { ChangeEvent, ReactNode } from "react";
import styles from "../styles/modules/button.module.scss";
import { getClasses } from "../utils/getClasses";

/* const buttonTypes: {} = {
  primary: "primary",
  secondary: "secondary",
}; */

type ButtonProps = {
  type?: string;
  variant: string;
  children: ReactNode;
  onClick?: () => void;
};

function Button({ type, variant = "primary", children, ...rest }: ButtonProps) {
  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      className={getClasses([styles.button, styles[`button--${variant}`]])}
      {...rest}
    >
      {children}
    </button>
  );
}

type SelectButtonProps = {
  children: ReactNode;
  id: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
};

function SelectButton({ children, id, ...rest }: SelectButtonProps) {
  return (
    <select
      id={id}
      className={getClasses([styles.button, styles.button__select])}
      {...rest}
    >
      {children}
    </select>
  );
}

export { SelectButton };
export default Button;
