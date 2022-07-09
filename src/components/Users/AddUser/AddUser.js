import { useState } from "react";
import Wrapper from "../../Helpers/Wrapper";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import ErrorModel from "../../UI/ErrorModal/ErrorModal";

import styles from "./AddUser.module.css";

const AddUser = ({ onAddUser }) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState(null);

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (>0).",
      });
      return;
    }

    onAddUser(enteredUsername, enteredAge);

    setEnteredAge("");
    setEnteredUsername("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {/* or <> </> or React.Fragment */}
      {error && <ErrorModel error={error} onClose={errorHandler}/>}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            // required
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />

          <label htmlFor="Age">Age (Years)</label>
          <input
            // required
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
