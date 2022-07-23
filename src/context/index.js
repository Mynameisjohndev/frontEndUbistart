import React, { useContext, createContext, useState, useEffect } from "react";
import api from "../services/api";
const Context = createContext({});

function ContextProvider({ children }){
  const [user, setUser] = useState();

  useEffect(() => {
    const localUser = localStorage.getItem('token');
    if (localUser) {
      setUser(JSON.parse(localUser));
    }
  }, []);

  useEffect(()=>{
    if(user){
      api.defaults.headers.authorization = `Bearer ${user.token}`;
    }
  },[user])

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