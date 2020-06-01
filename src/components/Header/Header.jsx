import React, { Component } from "react";
import Container from "components/Container/Container";
import { FacebookFilled, MenuOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import "./Header.scss";
class Header extends Component {
  state = {
    visible: false,
  };
  menuToggleHandler = () => {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible,
      };
    });
  };
  render() {
    return (
      <Container>
        <div className="nav-larger-screen">
          <Row justify="center">
            <Col xs={24} sm={24} md={22} lg={20} xl={18} className="nav-wrapper">
              <Row justify="center">
                <Col flex={1}>
                  <Row justify="center" align="middle">
                    <div className="nav-logo">
                      <h2>
                        <em>Welcome</em>
                      </h2>
                    </div>
                  </Row>
                </Col>
                <Col flex={8}>
                  <Row justify="space-around" align="middle" style={{ height: "100%" }}>
                    <Col flex={1} className="nav-item">
                      <Row justify="center" align="middle">
                        <a href="#service" className="nav-item-color">
                          service
                        </a>
                      </Row>
                    </Col>
                    <Col flex={1} className="nav-item">
                      <Row justify="center" align="middle">
                        <a href="#skill" className="nav-item-color">
                          Skill
                        </a>
                      </Row>
                    </Col>
                    <Col flex={1} className="nav-item">
                      <Row justify="center" align="middle">
                        <a href="#aboutme" className="nav-item-color">
                          About Me
                        </a>
                      </Row>
                    </Col>
                    <Col flex={1} className="nav-item">
                      <Row justify="center" align="middle">
                        <a href="#service" className="nav-item-color">
                          Education
                        </a>
                      </Row>
                    </Col>
                    <Col flex={1} className="nav-item">
                      <Row justify="center" align="middle">
                        <a href="#service" className="nav-item-color">
                          Porfolio
                        </a>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col flex={1}>
                  <Row justify="center" align="middle" style={{ height: "100%" }}>
                    <div className="nav-social-link">
                      <FacebookFilled />
                    </div>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="nav-small-screen">
          <Row justify="center">
            <Col xs={24} sm={24} md={22} lg={20} xl={18} className="nav-wrapper">
              <Row justify="center" align="middle">
                <Col flex="150px">
                  <Row justify="center" align="middle">
                    <div className="nav-logo">
                      <h2>
                        <em>Welcome</em>
                      </h2>
                    </div>
                  </Row>
                </Col>
                <Col flex="auto" className="navbar-menu-toggle" onClick={this.menuToggleHandler}>
                  <MenuOutlined />
                </Col>
              </Row>
            </Col>
          </Row>
          {this.state.visible && (
            <Row justify="center">
              <Col xs={24} sm={24} md={22} lg={20} xl={18} className="navbar-menu">
                <Row justify="center" className="navbar-item">
                  service
                </Row>
                <Row justify="center" className="navbar-item">
                  Skill
                </Row>
                <Row justify="center" className="navbar-item">
                  About Me
                </Row>
                <Row justify="center" className="navbar-item">
                  Education
                </Row>
                <Row justify="center" className="navbar-item">
                  Porfolio
                </Row>
                <Row justify="center" className="navbar-item" style={{ color: "#4267b2" }}>
                  <FacebookFilled />
                </Row>
              </Col>
            </Row>
          )}
        </div>
      </Container>
    );
  }
}
export default Header;
