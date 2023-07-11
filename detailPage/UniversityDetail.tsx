import * as React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import { ditailContext } from "../Portfolio";

import "./UniversityDetail.css";

type Props = {
  barColor: string;
  barTop: number;
};

function UniversityDetail(props: Props) {
  const { universityDetailState, TimePointDetailLength } =
    useContext(ditailContext);

  const universityDetailBlockStyle = {
    background: "black",
    top: "101px",
    height: "100px",
  };

  universityDetailBlockStyle.top = `${props.barTop + 101}px`;
  universityDetailBlockStyle.height = `${TimePointDetailLength.university}px`;
  universityDetailBlockStyle.background = `${props.barColor}`;

  if (!universityDetailState) {
    return <></>;
  } else {
    return (
      <div id="universityDetailBlock" style={universityDetailBlockStyle}></div>
    );
  }
}

export default UniversityDetail;
