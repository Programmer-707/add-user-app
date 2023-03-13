import React from "react";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
import Card from "./Card";

const ErrorModal = (props) => {
  return (
    <>
      <div className={styles.backdrop} onClick={props.cancelErrorModal}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.cancelErrorModal}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
