import React, { createContext, useReducer, useContext } from "react";

// Definir el estado inicial
const initialState = {
  theme: "light", // o 'dark'
  data: [],
};

// Definir las acciones
const ACTIONS = {
  TOGGLE_THEME: "TOGGLE_THEME",
  SET_DATA: "SET_DATA",
};

// Reducer para manejar las acciones
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_THEME:
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case ACTIONS.SET_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

// Crear el contexto
const ContextGlobal = createContext();

// Crear el proveedor del contexto
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

// Hook para usar el contexto
export const useGlobalContext = () => {
  const context = useContext(ContextGlobal);
  if (!context) {
    throw new Error("useGlobalContext must be used within a ContextProvider");
  }
  return context;
};
