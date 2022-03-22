import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import User from "./User";

const UserList = () => {
  const { user } = useContext(UserContext);
  const [currentPage] = useState(1);
  const [userPerPage] = useState(3);

  // En son kullanıcıyı bulmak için;
  const indexOfLastUser = currentPage * userPerPage;
  // İlk kullanıcıyı bulmak için;
  const indexOfFirstUser = indexOfLastUser - userPerPage;

  return (
    <>
      <User
        user={user}
        indexOfFirstUser={indexOfFirstUser}
        indexOfLastUser={indexOfLastUser}
      />
      <button className="show-more-button">Show more...</button>
    </>
  );
};

export default UserList;
