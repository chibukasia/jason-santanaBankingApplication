// UserDataContext.js
import { createContext, useContext, useState } from 'react';

const UserDataContext = createContext();

export const useUserData = () => useContext(UserDataContext);

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [totalAmount, setAmount] = useState(0)

  const addUserData = (newData) => {
    setUserData((prevData) => [...prevData, newData]);
  };

  const depositAmount = (money) => {
    setAmount(totalAmount + money)
  }

  const withdrawAmount = (money) => {
    setAmount(totalAmount-money)
  }

  return (
    <UserDataContext.Provider value={{ userData, addUserData, totalAmount, depositAmount, withdrawAmount }}>
      {children}
    </UserDataContext.Provider>
  );
};
