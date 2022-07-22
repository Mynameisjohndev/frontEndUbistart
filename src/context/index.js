import React, { useContext, createContext, useState } from "react";

const Context = createContext({});

function ContextProvider({ children }){
  const [user, setUser] = useState();
  return(
    <Context.Provider value={{ user, novo: "teste" }}>
      {children}
    </Context.Provider>
  )
}

function useContextApp (){
  const context = useContext(Context);
  return context;
}

export { useContextApp, ContextProvider }