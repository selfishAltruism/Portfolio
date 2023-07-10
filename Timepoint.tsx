import * as React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import { context } from "./App";

import "./Timepoint.css";

type Props = {
  barColor: string;
  barTop: number;
  barLength: number;
  startTime: string;
  endTime: string;
};

const timebarStyle = {
  background: "black",
  top: "40px",
  height: "3000px",
};

const startTimeStyle = {
  top: "20px",
  color: "black",
};

const endTimeStyle = {
  top: "3020px",
  color: "black",
};

const startTimeLineStyle = {
  background: "black",
  top: "43px",
};

const endTimeLineStyle = {
  background: "black",
  top: "3043px",
};

function Timepoint(props: Props) {
  timebarStyle.background = `${props.barColor}`;
  timebarStyle.top = `${props.barTop + 40}px`;
  timebarStyle.height = `${props.barLength}px`;

  startTimeStyle.color = `${props.barColor}`;
  endTimeStyle.color = `${props.barColor}`;
  startTimeStyle.top = `${props.barTop + 40 - 14}px`;
  endTimeStyle.top = `${props.barTop + props.barLength + 40 - 35}px`;

  startTimeLineStyle.background = `${props.barColor}`;
  endTimeLineStyle.background = `${props.barColor}`;
  startTimeLineStyle.top = `${props.barTop + 40 - 14 + 23}px`;
  endTimeLineStyle.top = `${props.barTop + props.barLength + 40 - 35 + 23}px`;

  return (
    <>
      <div id="timebar" style={timebarStyle}></div>

      <div id="startTimeLine" style={startTimeLineStyle}></div>
      <div id="startTime" style={startTimeStyle}>
        {props.startTime}
      </div>

      <div id="endTimeLine" style={endTimeLineStyle}></div>
      <div id="endTime" style={endTimeStyle}>
        {props.endTime}
      </div>
    </>
  );
}

export default Timepoint;
