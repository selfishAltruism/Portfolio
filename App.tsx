import * as React from "react";
import { useState, createContext, useReducer } from "react";

import "./App.css";

import Title from "./Title";
export const context = createContext(undefined);

function App() {
  /* 
  const reducer = (state, action) => {
    if (action == "swap") {
      return !state;
    } else if (action == "keep") {
      return state;
    }
  };

  const [reducerState, reducerSetState] = useReducer(reducer, true);*/

  return (
    <>
      <context.Provider value={{}}>
        <Title />
      </context.Provider>
    </>
  );
}

export default App;
