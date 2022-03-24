import { createContext, useEffect, useReducer, useState } from "react";
import JSONDATA from "../api/mockData.json";

export const UserContext = createContext();

const UserContextProvider = (props) => {

  const [search, setSearch] = useState('');
  const [user, setUser] = useState(JSONDATA.data)

  const [users, dispatch] = useReducer(() => {
      const users = localStorage.getItem("users");
      return users ? JSON.parse(users) : [];
    }
  );

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  });


  return (
    <UserContext.Provider value={{ dispatch, search, setSearch, user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
