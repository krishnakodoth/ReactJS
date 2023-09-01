import { ReactElement, ReactNode } from "react";
import styles from "../styles/modules/title.module.scss";

const PageTitle = ({
  children,
  ...rest
}: {
  children: ReactNode;
}): ReactElement => {
  return (
    <p className={styles.title} {...rest}>
      {children}
    </p>
  );
};

export default PageTitle;
