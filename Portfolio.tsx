import * as React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import { context } from "./App";

import Timepoint from "./Timepoint";

import "./Portfoilo.css";

export const MAXLENGTH_TIMEBAR = 3000;

function Portfolio() {
  return (
    <>
      <Timepoint
        barColor="dodgerblue"
        barTop={0}
        barLength={MAXLENGTH_TIMEBAR}
        startTime="2020.03.01"
        endTime="to be continued.."
      />

      <div id="gitLink2">
        <p>Made by https://github.com/selfishAltruism</p>
      </div>
    </>
  );
}

export default Portfolio;
