import {useUsers} from '../hooks/users.hooks'
function UsersList() {

  const users = useUsers();
  
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
