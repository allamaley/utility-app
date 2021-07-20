import { useEffect, useState } from "react";
import axios from "axios";

function UsersTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async (req, res) => {
      const { data: users } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(users);
    };
    fetchUsers();
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UsersTable;
