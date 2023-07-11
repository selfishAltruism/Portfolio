import * as React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import { ditailContext } from "../Portfolio";

import "./MilitaryEnlistmentDetail.css";

type Props = {
  barColor: string;
  barTop: number;
};

function MilitaryEnlistmentDetail(props: Props) {
  const { militaryEnlistmentDetailState, TimePointDetailLength } =
    useContext(ditailContext);

  const militaryEnlistmentBlockStyle = {
    background: "black",
    top: "101px",
    height: "100px",
  };

  militaryEnlistmentBlockStyle.top = `${props.barTop + 101}px`;
  militaryEnlistmentBlockStyle.height = `${TimePointDetailLength.militaryEnlistment}px`;
  militaryEnlistmentBlockStyle.background = `${props.barColor}`;

  if (!militaryEnlistmentDetailState) {
    return <></>;
  } else {
    return (
      <div
        id="militaryEnlistmentBlock"
        style={militaryEnlistmentBlockStyle}
      ></div>
    );
  }
}

export default MilitaryEnlistmentDetail;
