import * as React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import { context } from "./App";

import "./Timepoint.css";

type Props = {
  barColor: string;
  barTop: number;
  barLength: number;
};

const timebarStyle = {
  background: "black",
  top: "40px",
  height: `$(MAXLENGTH_TIMEBAR)`,
};

function Timepoint(props: Props) {
  timebarStyle.background = `${props.barColor}`;
  timebarStyle.top = `${props.barTop + 40}px`;
  timebarStyle.height = `${props.barLength}px`;

  return (
    <>
      <div id="timebar" style={timebarStyle}></div>
    </>
  );
}

export default Timepoint;
