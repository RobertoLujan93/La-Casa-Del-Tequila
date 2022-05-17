import React, { createContext, useContext, useEffect, useState } from "react";
import { tequilasData } from "../../data/tequilasData";

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({children}) => {
	const [tequilas, setTequilas] = useState([])

	useEffect(() => {
    getTequilas()
	}, [])

	const getTequilas = () => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(tequilasData);
      }, 2000)
    })

    promesa.then((data) => {
      setTequilas(data)
    })
  }

  return <AppContext.Provider 
	value= {{tequilas}}>
		{children}
	</AppContext.Provider>
}

export default AppContextProvider;
