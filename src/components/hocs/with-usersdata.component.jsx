import { useEffect, useState } from "react";
import axios from "axios";

function WithUsersdata(WrappedComponent) {
  //we pass here a LowerOrderComponent
  return function WithUsersdataWrapped() {
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
    return <WrappedComponent users={users} />;
  };
}
export default WithUsersdata;
