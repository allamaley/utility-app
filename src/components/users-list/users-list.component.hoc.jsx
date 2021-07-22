// import { useEffect, useState } from "react";
// import axios from "axios";

// function UsersList() {
function UsersList({ users }) {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const fetchUsers = async (req, res) => {
  //     const { data: users } = await axios.get(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     setUsers(users);
  //   };
  //   fetchUsers();
  // }, []);
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.name}) - {user.email} <br />
          {user.address.street},{user.address.city}
        </li>
      ))}
    </ul>
  );
}

export default UsersList;
