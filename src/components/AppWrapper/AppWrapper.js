import { useState } from "react";
import AddUser from "../Users/AddUser/AddUser";
import UsersList from "../Users/UsersList/UsersList";

const AppWrapper = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (enteredUsername, enteredAge) => {
    setUsersList((prevState) => [
      ...prevState,
      {
        username: enteredUsername,
        age: enteredAge,
        id: Math.random().toString(),
      },
    ]);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {usersList.length > 0 && <UsersList users={usersList} />}
    </div>
  );
};

export default AppWrapper;
