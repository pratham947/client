import React, { useState } from "react";
import mainContext from "./MainContext";
import axios from "axios";
import { API_URL } from "../utils/apiurl";

const MainContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [authloading, setAuthloading] = useState(false);
  const [token, setToken] = useState();

  const createAccount = async (userData) => {
    setAuthloading(true);
    const { data } = await axios.post(
      `${API_URL}/api/user/authenticate`,
      userData
    );
    console.log(data);
    return data;
  };
  return (
    <mainContext.Provider
      value={{
        createAccount,
        authloading,
        setAuthloading,
        token,
        setToken,
        user,
        setUser
      }}
    >
      {children}
    </mainContext.Provider>
  );
};

export default MainContextProvider;
