import * as React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import { ditailContext } from "../Portfolio";

import "./UniversityDetail.css";

type Props = {
  barColor: string;
  barTop: number;
};

const detailBlockStyle = {
  background: "black",

  top: "101px",

  height: "100px",
};

function UniversityDetail(props: Props) {
  const { universityDetailState, TimePointDetailLength } =
    useContext(ditailContext);

  detailBlockStyle.top = `${props.barTop + 101}px`;
  detailBlockStyle.height = `${TimePointDetailLength.university}px`;

  if (!universityDetailState) {
    return <></>;
  } else {
    return <div id="detailBlock" style={detailBlockStyle}></div>;
  }
}

export default UniversityDetail;
