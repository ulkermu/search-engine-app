import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import User from "./User";
import Pagination from "./Pagination";

const UserList = () => {
  const { user } = useContext(UserContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(3);

  // En son kullanıcıyı bulmak için;
  const indexOfLastUser = currentPage * userPerPage;
  // İlk kullanıcıyı bulmak için;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  // Sayfada gösterilmesini istediğimiz kullanıcılar için;
  //const currentUsers = user.data.slice(indexOfFirstUser, indexOfLastUser);
  // Toplam sayfa sayısı;
  const totalPagesNum = Math.ceil(user.data.length / userPerPage);

  return (
    <>
      <div className="user-list">
        <User user={user} indexOfFirstUser={indexOfFirstUser} indexOfLastUser={indexOfLastUser} />
        <a href="#!">Show more...</a>
      </div>
      <div className="app-pagination">
        <Pagination pages={totalPagesNum} setCurrentPage={setCurrentPage} />
      </div>
    </>
  );
};

export default UserList;
