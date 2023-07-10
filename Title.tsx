import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { context } from "./App";

import "./Title.css";

function Title() {
  /*   const { contextState, contsextSetState, reducerState, reducerSetState } =
    useContext(context);

  contsextSetState("Yes"); */

  const [cilckBlock1TopState, setCilckBlock1TopState] = useState("70vh");
  const [cilckBlock1LeftState, setCilckBlock1LeftState] = useState("-1vw");
  const cilckBlock1Style = {
    top: cilckBlock1TopState,
    left: cilckBlock1LeftState,
  };

  const [cilckBlock2TopState, setCilckBlock2TopState] = useState("0vh");
  const [cilckBlock2LeftState, setCilckBlock2LeftState] = useState("-1vw");
  const cilckBlock2Style = {
    top: cilckBlock2TopState,
    left: cilckBlock2LeftState,
  };

  const mainClickHandler = () => {
    const ele1 = document.getElementById("cilckBlock1");
    const ele1PositionTop = window.scrollY + ele1.getBoundingClientRect().top;
    let cilckBlock1TopPosition = ele1PositionTop + 55; // element에 기울기를 줬기 때문에 오차가 생겨 보정값이 필요: 55
    const ele1PositionLeft = window.scrollX + ele1.getBoundingClientRect().left;
    let cilckBlock1LeftPosition = ele1PositionLeft;

    const ele2 = document.getElementById("cilckBlock2");
    const ele2PositionTop = window.scrollY + ele2.getBoundingClientRect().top;
    let cilckBlock2TopPosition = ele2PositionTop + 70; // element에 기울기를 줬기 때문에 오차가 생겨 보정값이 필요: 70
    const ele2PositionLeft = window.scrollX + ele2.getBoundingClientRect().left;
    let cilckBlock2LeftPosition = ele2PositionLeft;

    const interval = setInterval(() => {
      cilckBlock1TopPosition = cilckBlock1TopPosition - 0.2;
      cilckBlock1LeftPosition = cilckBlock1LeftPosition + 3.2;
      setCilckBlock1TopState(`${cilckBlock1TopPosition}px`);
      setCilckBlock1LeftState(`${cilckBlock1LeftPosition}px`);

      cilckBlock2TopPosition = cilckBlock2TopPosition - 0.2;
      cilckBlock2LeftPosition = cilckBlock2LeftPosition - 2.8;
      setCilckBlock2TopState(`${cilckBlock2TopPosition}px`);
      setCilckBlock2LeftState(`${cilckBlock2LeftPosition}px`);
    }, 1);

    setTimeout(() => {
      clearInterval(interval);
    }, 3000);
  };

  return (
    <div onClick={mainClickHandler}>
      <div id="container">
        <div id="titleText1">Kang Min Kyu</div>
        <div id="titleText2">Development Portfolio</div>
        <div id="block"></div>
      </div>

      <div id="cilckBlock1" style={cilckBlock1Style}>
        Click anywhere Click anywhere Click anywhere Click anywhere Click
        anywhere Click anywhere Click anywhere
      </div>

      <div id="cilckBlock2" style={cilckBlock2Style}>
        Click anywhere Click anywhere Click anywhere Click anywhere Click
        anywhere Click anywhere Click anywhere
      </div>

      <div id="gitLink">
        <p>Made by https://github.com/selfishAltruism</p>
      </div>
    </div>
  );
}

export default Title;
