import * as React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import { ditailContext } from "../Portfolio";

import "./StudentCouncilDetail.css";

type Props = {
  barColor: string;
  barTop: number;
};

function StudentCouncilDetail(props: Props) {
  const { studentCouncilDetailState, TimePointDetailLength } =
    useContext(ditailContext);

  const studentCouncilDetailBlockStyle = {
    background: "black",
    top: "101px",
    height: "100px",
  };

  studentCouncilDetailBlockStyle.top = `${props.barTop + 101}px`;
  studentCouncilDetailBlockStyle.height = `${TimePointDetailLength.studentCouncil}px`;
  studentCouncilDetailBlockStyle.background = `${props.barColor}`;

  if (!studentCouncilDetailState) {
    return <></>;
  } else {
    return (
      <div
        id="studentCouncilDetailBlock"
        style={studentCouncilDetailBlockStyle}
      ></div>
    );
  }
}

export default StudentCouncilDetail;
