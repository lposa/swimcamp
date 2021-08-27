import React from "react";

function ProgressBar({ currentTime, swamTime, goalTime }) {
  function getProgress() {
    const percentage =
      (100 * (currentTime - swamTime)) / (currentTime - goalTime);
    return percentage;
  }

  const progress = getProgress().toFixed();

  return (
    <div className="progress-container">
      <div className="progressbar-container">
        <div className="progressbar-complete" style={{ width: `${progress}%` }}>
          <div className="progressbar-liquid"></div>
        </div>
        <span className="progress">{progress}%</span>
      </div>
    </div>
  );
}

export default ProgressBar;
