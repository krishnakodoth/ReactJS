import React, { Fragment, ReactNode } from "react";
import ReactDOM from "react-dom";
import classes from "../../styles/Modal.module.css";

const Backdrop = ({ onClick }: { onClick: () => void }) => {
  return <div className={classes.backdrop} onClick={onClick} />;
};

const ModalOverlay = ({ children }: { children: ReactNode }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const Modal = ({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) => {
  const portalElement = document?.getElementById("__next");
  return (
    <Fragment>
      {portalElement &&
        ReactDOM.createPortal(<Backdrop onClick={onClose} />, portalElement)}
      {portalElement &&
        ReactDOM.createPortal(
          <ModalOverlay>{children}</ModalOverlay>,
          portalElement
        )}
    </Fragment>
  );
};
export default Modal;
