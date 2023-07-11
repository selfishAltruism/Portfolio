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
  const [pageChangeState, setPageChangeState] = useState(0); // 원래는 0임. 메인 페이지 확인을 위해 부정으로 만듬 출시전에 바꿔라

  return (
    <>
      <context.Provider
        value={{
          setPageChangeState,
        }}
      >
        <ChangePage pageChangeState={pageChangeState} />
        <Portfolio />
      </context.Provider>
    </>
  );
}

export default App;
