import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false)

  const changeUsername = (event) => {
    setUsername(event.target.value);
  };

  const changeAge = (event) => {
    setAge(event.target.value);
  };

  const addUser = (e) => {
    e.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
        setError({
            title: "Invalid input",
            message: "Please enter a valid name and age (non-empty values)."
        })
      return;
    }

    if (+age < 1) {
        setError({
            title: "Invalid age",
            message: "Please enter a valid  age (> 0)."
        })
      return;
    }
    props.updateUserList({ name: username, age: age });
    setUsername("");
    setAge("");
  };

  const cancelModal = () => {
    setError(null)
  }

  return (
    <>
    {error && <ErrorModal title={error.title} message={error.message} cancelErrorModal={cancelModal}/>}
      <Card className={styles.input}>
        <form onSubmit={addUser}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={changeUsername}
          />
          <label htmlFor="age">Age(years)</label>
          <input id="age" type="number" value={age} onChange={changeAge} />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
