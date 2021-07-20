import "./users.styles.scss";
import UsersList from "../../components/users-list/users-list.component";
import UsersTable from "../../components/users-table/users-table.component";

function Users() {
  return (
    <div>
      <h2>Users list</h2>
      <UsersList />
      <UsersTable />
    </div>
  );
}
export default Users;
