import axios from "axios";
import React, { createContext, useContext, useState } from "react";
const UserProvider = createContext();
const FetchAPiProvider = ({ children }) => {
  // eslint-disable-next-line no-undef
  const [userData, setUserData] = useState([]);
  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=10");
      // eslint-disable-next-line no-undef
      setUserData(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    // eslint-disable-next-line no-undef
    <UserProvider.Provider value={{ userData, fetchUsers }}>
      {children}
    </UserProvider.Provider>
  );
};

export default FetchAPiProvider;

export const useUserProvider = () => useContext(UserProvider);
