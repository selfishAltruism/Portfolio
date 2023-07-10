import * as React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import { context } from "./App";

import Timepoint from "./Timepoint";

import "./Portfoilo.css";

export const MAXLENGTH_TIMEBAR = 3000;

function Portfolio() {
  const { setPageChangeState } = useContext(context);

  return (
    <>
      <div
        id="portfolioTitle"
        onClick={() => {
          setPageChangeState(0);
        }}
      >
        <p>Kang Min Kyu's Development Portfolio</p>
      </div>

      <Timepoint
        barColor="dodgerblue"
        barTop={0}
        barLength={MAXLENGTH_TIMEBAR}
        startTime="2020.03.01 ~ today"
        title="중앙대학교 소프트웨어학과 입학"
      />

      <div id="gitLink2">
        <p>Made by https://github.com/selfishAltruism</p>
      </div>
    </>
  );
}

export default Portfolio;
