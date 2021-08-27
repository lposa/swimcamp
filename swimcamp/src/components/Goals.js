import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";

function Goals({ goals }) {
  const [currentTime, setCurrentTime] = useState();
  const [goalTime, setGoalTime] = useState();
  const [swamTime, setSwamTime] = useState();

  useEffect(() => {
    setCurrentTime(goals.pb);
    setGoalTime(goals.goal);
    setSwamTime(goals.lbs);
  });

  return (
    <div className="container">
      <h5 style={{ textAlign: "center" }}>
        {goals.event}
        <p>
          <strong>PB : {currentTime}</strong>
        </p>
      </h5>
      <div className="goals-container">
        <GlassDiv>
          <h6 style={{ fontSize: "11px" }}>Last best swim</h6>
          <p style={{ fontSize: "20px" }}>{swamTime}</p>
        </GlassDiv>
        <ProgressBar
          currentTime={currentTime}
          goalTime={goalTime}
          swamTime={swamTime}
        />
        <GlassDiv>
          <h6 style={{ fontSize: "12px" }}>Goal</h6>
          <p style={{ fontSize: "20px" }}>{goalTime}</p>
        </GlassDiv>
      </div>
    </div>
  );
}

const GlassDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.17);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(6px);
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 100px;
  height: 100px;
  text-align: center;
  margin-bottom: 10px;
  overflow: hidden;
  color: #009ffd;
`;

export default Goals;
