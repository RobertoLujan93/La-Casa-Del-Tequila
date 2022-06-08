import React, { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [tequilas, setTequilas] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    getDocs(itemsCollection).then((snapshot) => {
      setTequilas(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return (
    <AppContext.Provider value={{ tequilas }}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
