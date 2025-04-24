import React, { useEffect, useState, createContext } from "react";
import { getLocalStorage, setLocalStorage } from "../Login/LocalStorage"; 

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({ employees: [], admin: null });

  useEffect(() => {
    // Check if localStorage has data, if not, initialize it
    const { employees, admin } = getLocalStorage();
    if (!employees || !admin) {
      console.log("Initializing localStorage with default values...");
      setLocalStorage(); // Sets default employees & admin if not found
    }
    
    // Fetch and update state
    const updatedData = getLocalStorage();
    setUserData(updatedData);
  }, []);

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
