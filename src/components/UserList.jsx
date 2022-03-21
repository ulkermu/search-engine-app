import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import User from "./User";

const UserList = () => {
  const {user} = useContext(UserContext)

  return (
    <div className="user-list">
      <User user={user} />
    </div>
  );
};

export default UserList;
