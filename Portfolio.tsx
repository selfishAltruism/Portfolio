import * as React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import { context } from "./App";

import Timepoint from "./Timepoint";

import "./Portfoilo.css";

const MAXLENGTH_TIMEBAR = 3000;

function Portfolio() {
  return (
    <>
      <Timepoint
        barColor="dodgerblue"
        barTop={0}
        barLength={MAXLENGTH_TIMEBAR}
      />

      <div id="gitLink">
        <p>Made by https://github.com/selfishAltruism</p>
      </div>
    </>
  );
}

export default Portfolio;
