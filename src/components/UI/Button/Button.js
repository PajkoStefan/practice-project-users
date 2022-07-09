import styles from "./Button.module.css";

const Button = ({ type, onClickHandler, children}) => {
  return (
    <button
      className={styles.button}
      type={type || "button"}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
