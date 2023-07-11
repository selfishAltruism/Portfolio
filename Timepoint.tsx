import * as React from "react";
import { useState, useEffect, useRef, useContext } from "react";

import "./Timepoint.css";

import { IoIosArrowUp } from "react-icons/io";

type Props = {
  barColor: string;
  barTop: number;
  barLength: number;
  startTime: string;
  title: string;
  setState;
};

const timebarStyle = {
  background: "black",

  top: "70px",

  height: "3000px",
};

const startTimeStyle = {
  top: "64px",
  left: "110px",

  color: "black",
};

const titleStyle = {
  top: "38px",
  left: "0px",

  width: "100vw",

  color: "#323232",
};

const DetailBlockStyle = {
  background: "black",

  top: "70px",
};

const startTimeLineStyle = {
  background: "black",

  top: "101px",
};

function Timepoint(props: Props) {
  timebarStyle.background = `${props.barColor}`;
  timebarStyle.top = `${props.barTop + 70}px`;
  timebarStyle.height = `${props.barLength}px`;

  startTimeStyle.color = `${props.barColor}`;
  startTimeStyle.top = `${props.barTop + 70 - 6}px`;

  titleStyle.top = `${props.barTop + 70 - 32}px`;

  DetailBlockStyle.background = `${props.barColor}`;
  DetailBlockStyle.top = `${props.barTop + 70}px`;

  startTimeLineStyle.background = `${props.barColor}`;
  startTimeLineStyle.top = `${props.barTop + 70 + 31}px`;

  const [fcCollapseState, setfcCollapseState] = useState("rotate(0deg)");

  const fcCollapseStyle = {
    transform: `${fcCollapseState}`,
  };

  const detailBlockClick = () => {
    if (fcCollapseState == "rotate(0deg)") {
      setfcCollapseState("rotate(180deg)");
      props.setState(true);
    } else {
      setfcCollapseState("rotate(0deg)");
      props.setState(false);
    }
  };

  return (
    <>
      <div id="timebar" style={timebarStyle}></div>

      <div id="startTimeLine" style={startTimeLineStyle}></div>

      <div id="startTime" style={startTimeStyle}>
        {props.startTime}
      </div>

      <div id="title" style={titleStyle}>
        <p>{props.title}</p>
      </div>

      <div id="DetailBlock" style={DetailBlockStyle} onClick={detailBlockClick}>
        <span>See Detail </span>
        <IoIosArrowUp size="30" style={fcCollapseStyle} />
      </div>
    </>
  );
}

export default Timepoint;
