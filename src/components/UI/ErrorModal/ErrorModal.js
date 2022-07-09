import Button from "../Button/Button";
import Card from "../Card/Card";

import styles from "./ErrorModal.module.css";

const ErrorModel = ({ error: { title, message }, onClose}) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={onClose}/>
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
    </div>
  );
};

export default ErrorModel;
