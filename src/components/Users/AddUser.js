import React, { useState, useRef } from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [error, setError] = useState();

  const username = useRef();
  const age = useRef();

  const addUser = (e) => {
    e.preventDefault();

    const enteredName = username.current.value;
    const enteredAge = age.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid  age (> 0).",
      });
      return;
    }

    props.updateUserList({ name: enteredName, age: enteredAge });

    username.current.value = "";
    age.current.value = "";
  };

  const cancelModal = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          cancelErrorModal={cancelModal}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUser}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={username} />
          <label htmlFor="age">Age(years)</label>
          <input id="age" type="number" ref={age} />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
