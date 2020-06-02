import React, { Component } from "react";
import { Row, Col } from "antd";
import "./PortfolioSection.scss";
class PortfolioSection extends Component {
  render() {
    return (
      <div className="portfolio-wrapper" id="portfolio">
        <Row justify="center" gutter={[0, 10]}>
          <Col xs={15} sm={9} md={7} lg={5} xl={3} className="portfolio-heading">
            <h1>Portfolio</h1>
          </Col>
        </Row>
        <Row justify="space-around" style={{ marginTop: "10rem" }}>
          <a href="https://ayms-ed.herokuapp.com/">
            <Col flex="600px" className="portfolio-card-wrapper">
              <Row justify="center">
                <div className="portfolio-card-img">
                  {/* <img src={require("./Capture.JPG")} alt="portfolio pic" /> */}
                </div>
                <div className="portfolio-card-heading">Current Working</div>
                <div className="portfolio-card-context">
                  <p>Ayms of Education institute</p>
                </div>
              </Row>
            </Col>
          </a>
        </Row>
      </div>
    );
  }
}

export default PortfolioSection;
