import User from "./User";
import { useState } from "react";
import users from "../api/mockData.json";

const UserList = () => {
  const [user] = useState(users);

  return (
    <div className="user-list">
      <User user={user} />
    </div>
  );
};

export default UserList;
