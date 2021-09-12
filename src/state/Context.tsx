import { Action, State, reducer } from "./Reducer";
import React, { useContext, useReducer } from "react";

// Create type of Context

type ContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

type ProviderProps = {
  children: React.ReactNode;
};

// Create context object using create context

export const Context = React.createContext<ContextType>({
  state: { biometricType: null }, // assign a default value
  dispatch: () => null,
});

// Accepts a context object and returns the current context value
export const useStateApi = () => useContext(Context);

export const StateProvider: React.FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { biometricType: null });

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
