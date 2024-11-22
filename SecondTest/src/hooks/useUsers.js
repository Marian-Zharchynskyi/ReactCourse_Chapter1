import { useState } from "react";
import { getUsers } from "../services/userService";

const useUsers = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return { users, fetchUsers };
};

export default useUsers;
