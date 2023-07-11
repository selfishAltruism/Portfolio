import * as React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import { ditailContext } from "../Portfolio";

import "./IT_DADetail.css";

type Props = {
  barColor: string;
  barTop: number;
};

function IT_DADetail(props: Props) {
  const { it_daDetailState, TimePointDetailLength } = useContext(ditailContext);

  const IT_DADetailBlockStyle = {
    background: "black",
    top: "101px",
    height: "100px",
  };

  IT_DADetailBlockStyle.top = `${props.barTop + 101}px`;
  IT_DADetailBlockStyle.height = `${TimePointDetailLength.it_da}px`;
  IT_DADetailBlockStyle.background = `${props.barColor}`;

  if (!it_daDetailState) {
    return <></>;
  } else {
    return (
      <div id="IT_DADetailBlock" style={IT_DADetailBlockStyle}>
        <iframe
          id="it_daYouTube"
          width="460"
          height="250"
          src="https://www.youtube.com/embed/A4qq8sp7lDs"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    );
  }
}

export default IT_DADetail;
