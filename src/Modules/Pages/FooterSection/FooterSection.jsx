import React, { Component } from "react";
import { Row, Col } from "antd";
import { FacebookFilled, GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import "./FooterSection.scss";
class FooterSection extends Component {
  render() {
    return (
      <div className="footer-wrapper" id="footer">
        <Row justify="center" gutter={[0, 10]}>
          <Col xs={20} sm={10} md={7} lg={5} xl={3}>
            <Row justify="center" className="footer-heading">
              <h1>Social Links</h1>
            </Row>
            <Row justify="space-around" style={{ marginTop: "2rem" }}>
              <Col flex={1} className="social-item">
                <a href="mailto:salmanasif36@gmail.com">
                  <GoogleOutlined style={{ color: "#dd4b39" }} />
                </a>
              </Col>
              <Col flex={1} className="social-item">
                <a href="https://www.facebook.com/profile.php?id=100015273218086">
                  <FacebookFilled style={{ color: "#4267b2" }} />
                </a>
              </Col>
              <Col flex={1} className="social-item">
                <a href="https://github.com/SalmanDevil">
                  <GithubOutlined />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row justify="center" style={{ marginTop: "2rem" }}>
          <div className="footer-name">
            <h2>Muhammad Salman Asif &copy;</h2>
            <p>2020</p>
          </div>
        </Row>
      </div>
    );
  }
}

export default FooterSection;
