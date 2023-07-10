import * as React from "react";
import {} from "react";
import { context } from "./App";

import "./Title.css";

function Title() {
  /*   const { contextState, contsextSetState, reducerState, reducerSetState } =
    useContext(context);

  contsextSetState("Yes"); */

  return (
    <>
      <div id="container">
        <div id="titleText1">강민규의</div>
        <div id="titleText2">컴퓨터 공학 일대기</div>
        <div id="block"></div>
      </div>
      <div id="cilckBlock">
        Click anywhere Click anywhere Click anywhere Click anywhere Click
        anywhere Click anywhere Click anywhere
      </div>
      <div id="gitLink">
        <p>Made by https://github.com/selfishAltruism</p>
      </div>
    </>
  );
}

export default Title;
