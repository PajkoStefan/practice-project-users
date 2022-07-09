import Card from "../../UI/Card/Card";

import styles from "./UsersList.module.css";

const UsersList = ({ users }) => {
  return (
    <Card className={styles.users}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>{`${user.username} -> ${user.age} years old`}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
