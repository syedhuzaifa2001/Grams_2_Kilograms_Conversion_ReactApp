import React from "react";
import Card from "../Card/Card";
import classes from "./ErrorModal.module.css"
import Button from "../Button/Button";

function ErrorModal(props) {
  return (
    <div className={classes.backdrop} onClick={props.onHandleError}>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div>
          <h4 className={classes.content}>{props.message}</h4>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onHandleError}>Close!</Button>
        </footer>
      </Card>
    </div>
  );
}

export default ErrorModal;
