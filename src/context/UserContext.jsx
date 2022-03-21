import { createContext, useEffect, useReducer, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {

  const [user, dispatch] = useReducer(() => {
      const user = localStorage.getItem("user");
      return user ? JSON.parse(user) : [];
    }
  );

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  });

  const [search, setSearch] = useState('');

  return (
    <UserContext.Provider value={{ dispatch, search, setSearch }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
