import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from './components/Users/UsersList'

function App() {
  const [users, setUsers] = useState([]);

  const updateUserList = (user) => {
    setUsers((prevUsers) => { return [...prevUsers, user]});
  };

  return (
    <div>
      <AddUser updateUserList={updateUserList} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
