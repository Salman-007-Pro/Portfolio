import React, { Component } from "react";
import { Row, Col } from "antd";
import "./EducationSection.scss";
class EducationSection extends Component {
  render() {
    return (
      <div className="education-wrapper" id="education">
        <Row justify="center" gutter={[0, 10]}>
          <Col xs={15} sm={9} md={7} lg={5} xl={3} className="education-heading">
            <h1>Education</h1>
          </Col>
        </Row>
        <Row justify="space-around" style={{ marginTop: "10rem" }}>
          <Col flex="600px" className="education-card-wrapper">
            <Row justify="center">
              <div className="education-card-heading">
                <h1>Sir Syed University</h1>
              </div>
              <div className="education-card-year">2017-2021</div>
              <div className="education-card-context">
                <p>Bachelor's in software engineering.</p>
              </div>
            </Row>
          </Col>
          <Col flex="600px" className="education-card-wrapper">
            <Row justify="center">
              <div className="education-card-heading">
                <h1>Udemy</h1>
              </div>
              <div className="education-card-year">2019</div>
              <div className="education-card-context">
                <p>React - The Complete Guide by Maximilian</p>
              </div>
            </Row>
          </Col>
        </Row>
        <Row justify="space-around" style={{ marginTop: "8rem" }}>
          <Col flex="600px" className="education-card-wrapper">
            <Row justify="center">
              <div className="education-card-heading">
                <h1>Udemy</h1>
              </div>
              <div className="education-card-year">2018</div>
              <div className="education-card-context">
                <p>Advanced CSS and Sass by Jonas Schmedtmann</p>
              </div>
            </Row>
          </Col>
        </Row>
        <Row justify="space-around" style={{ marginTop: "8rem" }}>
          <Col flex="600px" className="education-card-wrapper">
            <Row justify="center">
              <div className="education-card-heading">
                <h1>Udemy</h1>
              </div>
              <div className="education-card-year">2018</div>
              <div className="education-card-context">
                <p>The Complete JavaScript Course by Jonas Schmedtmann</p>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default EducationSection;
