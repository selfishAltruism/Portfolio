import * as React from "react";
import { useState, createContext, useContext } from "react";
import { context } from "./App";

export const ditailContext = createContext(undefined);

import Timepoint from "./Timepoint";
import UniversityDetail from "./detailPage/UniversityDetail";

import "./Portfoilo.css";

export const MAXLENGTH_TIMEBAR = 3000;

function Portfolio() {
  const { setPageChangeState } = useContext(context);

  const TimePointDetailLength = {
    university: 700,
  };

  const [universityDetailState, setUniversityDetailState] = useState(false);

  return (
    <>
      <ditailContext.Provider
        value={{
          universityDetailState,
          TimePointDetailLength,
        }}
      >
        <div
          id="portfolioTitle"
          onClick={() => {
            setPageChangeState(0);
          }}
        >
          <p>Kang Min Kyu's Development Portfolio</p>
        </div>

        <Timepoint
          barColor="dodgerblue"
          barTop={0}
          barLength={MAXLENGTH_TIMEBAR}
          startTime="2020.03.01 ~ today"
          title="중앙대학교 소프트웨어학과 입학"
          setState={setUniversityDetailState}
        />

        <UniversityDetail barColor="dodgerblue" barTop={0} />

        {/* <Timepoint
          barColor="rgb(255, 166, 0)"
          barTop={100}
          barLength={500}
          startTime="2021.01.01 ~ 2021.12.31"
          title="소프트웨어학부 학생회 교육부장 활동"
          detailName="studentCouncil"
        />

        <Timepoint
          barColor="#323232"
          barTop={2000}
          barLength={300}
          startTime="2021.07.10 ~ 2021.12.12"
          title="Develop Portfoilo wed page"
          detailName="portfoilo"
        />
 */}
        <div id="gitLink2">
          <p>Made by https://github.com/selfishAltruism</p>
        </div>
      </ditailContext.Provider>
    </>
  );
}

export default Portfolio;
