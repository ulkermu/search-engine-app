import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const User = ({ user }) => {
  const truncateMail = (string, maxLength) => {
    if (!string) return null;
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength)}...`;
  };

  const {search} = useContext(UserContext);

  return (
    <>
      {user.data.filter((value) => {
        if (search === "") {
          return value;
        } else if (value[0].toLowerCase().includes(search.toLowerCase()) || value[4].toLowerCase().includes(search.toLowerCase()) || value[3].toLowerCase().includes(search.toLowerCase())) {
          return value;
        }
      }).map((user) => (
        <div className="user" key={user[2]}>
          <div className="user-left">
            <div className="user-from">{`${truncateMail(user[4], 18)} - ${
              user[5]
            }`}</div>
            <div className="user-pers">{`${user[0]} - ${user[3]}`}</div>
          </div>
          <div className="user-mail">{`Email: ${truncateMail(
            user[2],
            10
          )}`}</div>
        </div>
      ))}
    </>
  );
};

export default User;
