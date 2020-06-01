import React, { Component } from "react";
import { Row, Col, Card } from "antd";
// import { UserOutlined, WhatsAppOutlined } from "@ant-design/icons";
import "./ServiceSection.scss";
class ServiceSection extends Component {
  render() {
    return (
      <div className="service-wrapper" id="service">
        <Row justify="center" gutter={[0, 10]}>
          <Col xs={15} sm={9} md={7} lg={5} xl={3} className="service-heading">
            <h1>Service</h1>
          </Col>
        </Row>
        <Row justify="center" style={{ marginTop: "5rem" }}>
          <Col flex={1} className="card-setting">
            <Row justify="center">
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src={require("./responsive.jpeg")}
                    className="card-img-setting"
                  />
                }>
                <h2 className="card-heading">Responsive website</h2>
                <p className="card-text">I will create a responsive website at normal price</p>
              </Card>
            </Row>
          </Col>
          <Col flex={1} className="card-setting">
            <Row justify="center">
              <Card
                hoverable
                style={{ width: 260 }}
                cover={
                  <img alt="example" src={require("./reactjs.jpg")} className="card-img-setting" />
                }>
                <h2 className="card-heading">Reactjs App</h2>
                <p className="card-text">
                  I will create a reactjs app at normal price by using ant design or not
                </p>
              </Card>
            </Row>
          </Col>
          <Col flex={1} className="card-setting">
            <Row justify="center">
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src={require("./htmlandcss.png")}
                    className="card-img-setting"
                  />
                }>
                <h2 className="card-heading">Bugs fixed</h2>
                <p className="card-text">
                  I will fix any bugs in your website like redux, route, logic creates and
                  javascript
                </p>
              </Card>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
export default ServiceSection;
