import "./users.styles.scss";
import WithUsersdata from "../../components/hocs/with-usersdata.component";
import UsersList from "../../components/users-list/users-list.component";
import UsersTable from "../../components/users-table/users-table.component";

//higher order components pattern: HOC
//a HOC is a componentn that takes a component X as input and returns a new component Y
//that will have component X alonfg with extra common functionalities added to  it

// const UsersListWithData = WithUsersdata(UsersList);
// const UsersTableWithData = WithUsersdata(UsersTable);

function Users() {
  return (
    //display users in a list
    //display users in a table
    <>
      <h2>Users list</h2>
      {/* <UsersListWithData />
      <UsersTableWithData /> */}
      <UsersList />
      <UsersTable />
    </>
  );
}
export default Users;
