import React from "react";
import { Progress } from "antd";
import "./ProgressBar.scss";
const ProgressBar = (props) => {
  return (
    <div className="skill-box">
      <div className="skill-heading">{props.title}:</div>
      <div className="skill-bar">
        <Progress
          trailColor={"#D9D9D9"}
          strokeColor={{
            "0%": "#999",
            "100%": "#232526",
          }}
          percent={props.percent}
          status="active"
        />
      </div>
    </div>
  );
};

export default ProgressBar;
