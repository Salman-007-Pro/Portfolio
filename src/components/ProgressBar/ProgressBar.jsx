import React from "react";
import { Progress, Row, Col } from "antd";
import "./ProgressBar.scss";
const ProgressBar = (props) => {
  return (
    <div className="progressbar-wrapper">
      <Row align="middle">
        <Col flex="100px" className="progressbar-title">
          {props.title}:
        </Col>
        <Col flex="auto">
          <Progress
            trailColor={"#D9D9D9"}
            strokeColor={{
              "0%": "#999",
              "100%": "#232526",
            }}
            percent={props.percent}
            status="active"
          />
        </Col>
      </Row>
    </div>
  );
};

export default ProgressBar;
