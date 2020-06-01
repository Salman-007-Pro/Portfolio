import React, { Component } from "react";
import Header from "components/Header/Header";
import ReactRotatingText from "react-rotating-text";
import { Row, Col } from "antd";
import "./HeaderSection.scss";
class HeaderSection extends Component {
  render() {
    return (
      <div className="header-section-wrapper">
        <Header />
        <Row>
          <Col className="header-box">
            <Row justify="center">
              <h1 className="header-text-heading-primary">Assalamualaikum</h1>
            </Row>
            <Row justify="center">
              <h2 className="header-text-heading-secondary">I'm Muhammad Salman Asif</h2>
            </Row>
            <Row justify="center">
              <ReactRotatingText
                items={["Web Designer", "Front-End Developer", "React Developer", "Web Developer"]}
                typingInterval={100}
                deletingInterval={100}
                className="header-text-heading-typewriter"
              />
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
export default HeaderSection;
