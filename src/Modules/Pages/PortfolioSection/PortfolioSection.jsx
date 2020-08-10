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
                <div className="portfolio-card-img" id="img-1">
                  {/* <img src={require("./inApp.")} alt="portfolio pic" /> */}
                </div>
                <div className="portfolio-card-heading">Current Working</div>
                <div className="portfolio-card-context">
                  <p>Ayms of Education institute</p>
                  <p style={{ color: "red", fontSize: "12px" }}>currently not working link</p>
                </div>
              </Row>
            </Col>
          </a>
          <a href="http://bowwowhomepage.surge.sh/">
            <Col flex="600px" className="portfolio-card-wrapper">
              <Row justify="center">
                <div className="portfolio-card-img" id="img-2">
                  {/* <img src={require("./Capture.JPG")} alt="portfolio pic" /> */}
                </div>
                <div className="portfolio-card-heading">Html Template create for client</div>
                <div className="portfolio-card-context">
                  <p>Pet shop template</p>
                </div>
              </Row>
            </Col>
          </a>
          <a href="http://inapp-solution-home-page.surge.sh/">
            <Col flex="600px" className="portfolio-card-wrapper">
              <Row justify="center">
                <div className="portfolio-card-img" id="img-3">
                  {/* <img src={require("./Capture.JPG")} alt="portfolio pic" /> */}
                </div>
                <div className="portfolio-card-heading">Html Template create</div>
                <div className="portfolio-card-context">
                  <p>Company Website</p>
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
