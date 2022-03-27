import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const User = ({ indexOfFirstUser, indexOfLastUser }) => {

  const { search } = useContext(UserContext);
  const { user } = useContext(UserContext);

  const truncateMail = (string, maxLength) => {
    if (!string) return null;
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength)}...`;
  };

  return (
    <>
      {user
        .filter((value) => {
          if (search === "") {
            return value;
          } else if (
            value[0].toLowerCase().includes(search.toLowerCase()) ||
            value[4].toLowerCase().includes(search.toLowerCase()) ||
            value[3].toLowerCase().includes(search.toLowerCase())
          ) { 
            return value
          }
          return false;
        })
        .slice(indexOfFirstUser, indexOfLastUser)
        .map((user) => (
          <div className="app-user" key={user[2]}>
            <div className="user">
              <div className="user-left">
                <div className="user-from">{`${truncateMail(user[4], 24)} - ${
                  user[5]
                }`}</div>
                <div className="user-pers">{`${user[0]} - ${user[3]}`}</div>
              </div>
              <div className="user-mail">{`Email: ${truncateMail(
                user[2],
                15
              )}`}</div>
            </div>
            <div className="line"></div>
          </div>
        ))}
    </>
  );
};

export default User;
