import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import MoreUser from "./MoreUser";
import Pagination from "./Pagination";

const MoreList = () => {
  const { user } = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(6);

  // En son kullanıcıyı bulmak için;
  const indexOfLastUser = currentPage * userPerPage;
  // İlk kullanıcıyı bulmak için;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  // Toplam sayfa sayısı;
  const totalPagesNum = Math.ceil(user.data.length / userPerPage);

  return (
    <>
      <div className="more-list">
        <MoreUser user={user} indexOfFirstUser={indexOfFirstUser} indexOfLastUser={indexOfLastUser} />
      </div>
      <div className="app-pagination">
        <Pagination pages={totalPagesNum} setCurrentPage={setCurrentPage} />
      </div>
    </>
  );
};

export default MoreList;
