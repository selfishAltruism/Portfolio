import * as React from "react";
import { useState, createContext, useReducer } from "react";

import "./App.css";

import Title from "./Title";
import Portfolio from "./Portfolio";

export const context = createContext(undefined);

function ChangePage(props) {
  if (props.pageChangeState == 0) return <Title />;
  return <></>;
}

function App() {
  const [pageChangeState, setPageChangeState] = useState(0);

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
      <context.Provider value={{ setPageChangeState }}>
        <ChangePage pageChangeState={pageChangeState} />
        <Portfolio />
      </context.Provider>
    </>
  );
}

export default App;
