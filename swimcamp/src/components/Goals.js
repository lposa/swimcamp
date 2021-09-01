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
  }, [goals.pb, goals.goal, goals.lbs]);

  return (
    <div className="container" style={{ width: "auto" }}>
      <h5 style={{ textAlign: "center" }}>
        {goals.event}
        <p>
          <strong>PB : {currentTime}</strong>
        </p>
      </h5>
      <div className="goals-container">
        <GlassDiv>
          <SwimInfoHeader>Last best swim</SwimInfoHeader>
          <SwimInfoText style={{ fontSize: "20px" }}>{swamTime}</SwimInfoText>
        </GlassDiv>
        <ProgressBar
          currentTime={currentTime}
          goalTime={goalTime}
          swamTime={swamTime}
        />
        <GlassDiv>
          <SwimInfoHeader style={{ fontSize: "12px" }}>Goal</SwimInfoHeader>
          <SwimInfoText style={{ fontSize: "20px" }}>{goalTime}</SwimInfoText>
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

  @media only screen and (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

const SwimInfoHeader = styled.div`
  font-size: 12px;
  @media only screen and (max-width: 480px) {
    font-size: 10px;
  }
`;

const SwimInfoText = styled.div`
  font-size: 20px;
  @media only screen and (max-width: 480px) {
    font-size: 15px;
  }
`;
export default Goals;
