import React, { useContext, createContext, useState, useEffect } from "react";

const Context = createContext({});

function ContextProvider({ children }){
  const [user, setUser] = useState();

  useEffect(() => {
    const localUser = localStorage.getItem('token');
    if (localUser) {
      setUser(JSON.parse(localUser));
    }
  }, []);

  return(
    <Context.Provider value={{ user, setUser }}>
      {children}
    </Context.Provider>
  )
}

function useContextApp (){
  const context = useContext(Context);
  return context;
}

export { useContextApp, ContextProvider }