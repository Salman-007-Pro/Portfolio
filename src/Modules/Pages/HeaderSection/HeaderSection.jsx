import React, { Component } from "react";
import Header from "components/Header/Header";
import ReactRotatingText from "react-rotating-text";
import { Row, Col, Button } from "antd";
import "./HeaderSection.scss";
import { BackTop } from "antd";
import { CaretUpOutlined, DownloadOutlined } from "@ant-design/icons";
// import PDF from "./resume.pdf";
class HeaderSection extends Component {
  render() {
    // const pdf = require("./resume.pdf");
    // console.log(pdf);
    return (
      <>
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
                  items={[
                    "Web Designer",
                    "Front-End Developer",
                    "React Developer",
                    "Web Developer",
                  ]}
                  typingInterval={100}
                  deletingInterval={100}
                  className="header-text-heading-typewriter"
                />
              </Row>
              <Row justify="center">
                <a href="./resume.pdf" download="resume.pdf">
                  <Button
                    type="primary"
                    shape="square"
                    icon={<DownloadOutlined />}
                    size="middle"
                    className="download-cv">
                    View my Cv
                  </Button>
                </a>
              </Row>
            </Col>
          </Row>
        </div>
        <BackTop visibilityHeight="1000">
          <div className="goto-top">
            <CaretUpOutlined />
          </div>
        </BackTop>
      </>
    );
  }
}
export default HeaderSection;
