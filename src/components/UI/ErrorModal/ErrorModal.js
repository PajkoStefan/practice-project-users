import { createPortal } from "react-dom";

import Wrapper from "../../Helpers/Wrapper";
import Button from "../Button/Button";
import Card from "../Card/Card";

import styles from "./ErrorModal.module.css";

const Backdrop = ({ onClose }) => {
  return <div className={styles.backdrop} onClick={onClose} />;
};

const ModalOverlay = ({ title, message, onClose }) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>
        <p>{message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={onClose}>Close</Button>
      </footer>
    </Card>
  );
};

const ErrorModel = ({ error: { title, message }, onClose }) => {
  return (
    <Wrapper>
      {createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <ModalOverlay title={title} message={message} onClose={onClose} />,
        document.getElementById("overlay-root")
      )}
    </Wrapper>
  );
};

export default ErrorModel;
