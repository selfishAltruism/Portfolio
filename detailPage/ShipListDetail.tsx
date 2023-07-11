import * as React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import { ditailContext } from "../Portfolio";

import "./ShipListDetail.css";

type Props = {
  barColor: string;
  barTop: number;
};

function ShipListDetail(props: Props) {
  const { shipListDetailState, TimePointDetailLength } =
    useContext(ditailContext);

  const shipListBlockStyle = {
    background: "black",
    top: "101px",
    height: "100px",
  };

  shipListBlockStyle.top = `${props.barTop + 101}px`;
  shipListBlockStyle.height = `${TimePointDetailLength.shipList}px`; // 수정
  shipListBlockStyle.background = `${props.barColor}`;

  if (!shipListDetailState) {
    return <></>;
  } else {
    return <div id="shipListBlock" style={shipListBlockStyle}></div>;
  }
}

export default ShipListDetail;
