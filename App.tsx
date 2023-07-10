import * as React from "react";
import { useState, createContext, useReducer } from "react";

import "./App.css";

import Title from "./Title";
import Portfolio from "./Portfolio";

export const context = createContext(undefined);

function ChangePage(props) {
  if (props.pageChangeState == 0) return <Title />;
  return <Portfolio />;
}

function App() {
  const [pageChangeState, setPageChangeState] = useState(1); // 원래는 1임. 메인 페이지 확인을 위해 부정으로 만듬 출시전에 바꿔라

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
      </context.Provider>
    </>
  );
}

export default App;
