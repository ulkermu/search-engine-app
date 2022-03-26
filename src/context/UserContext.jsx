import { createContext, useEffect, useReducer, useState } from "react";
import JSONDATA from "../api/mockData.json";

export const UserContext = createContext();

const UserContextProvider = (props) => {

  const [search, setSearch] = useState('');
  const [user, setUser] = useState(JSONDATA.data)

  const [users, dispatch] = useReducer(() => {
      const users = localStorage.getItem("data");
      return users ? JSON.parse(users) : [];
    }
  );

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(users));
  });

  return (
    <UserContext.Provider value={{ dispatch, search, setSearch, user, setUser, users }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
