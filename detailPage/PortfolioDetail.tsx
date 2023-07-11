import * as React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import { ditailContext } from "../Portfolio";

import "./PortfolioDetail.css";

type Props = {
  barColor: string;
  barTop: number;
};

function PortfolioDetail(props: Props) {
  const { portfolioDetailState, TimePointDetailLength } =
    useContext(ditailContext);

  const portfolioBlockStyle = {
    background: "black",
    top: "101px",
    height: "100px",
  };

  portfolioBlockStyle.top = `${props.barTop + 101}px`;
  portfolioBlockStyle.height = `${TimePointDetailLength.portfolio}px`; // 수정
  portfolioBlockStyle.background = `${props.barColor}`;

  if (!portfolioDetailState) {
    return <></>;
  } else {
    return <div id="portfolioBlock" style={portfolioBlockStyle}></div>;
  }
}

export default PortfolioDetail;
