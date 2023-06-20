import React, { createContext, useContext } from 'react';

const LayoutContext = createContext({});

export function LayoutProvider({ children, nameForm, email, setEmail, password, setPassword, handleFunction }) {
  return (
    <LayoutContext.Provider value={{ nameForm, email, setEmail, password, setPassword, handleFunction }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayoutContext() {
  return useContext(LayoutContext);
}