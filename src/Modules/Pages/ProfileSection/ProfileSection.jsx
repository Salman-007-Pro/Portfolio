import React from "react";
import "./ProfileSection.scss";
import { Avatar, Row, Col } from "antd";
import { UserOutlined, WhatsAppOutlined } from "@ant-design/icons";
import ProgressBar from "components/ProgressBar/ProgressBar";
const ProfileSection = (props) => {
  return (
    <div className="aboutus-wrapper-resp">
      <Row justify="center" gutter={[0, 10]}>
        <Col xs={16} sm={10} md={8} lg={6} xl={4} className="aboutus-heading">
          <h1>About Us</h1>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: "5rem" }} id="aboutme">
        <Col xs={24} sm={18} md={12} lg={10} xl={10} className="profile-info-resp ">
          <Row justify="center" className="profile-pic-resp">
            <Avatar
              size={100}
              shape="circle"
              icon={<UserOutlined />}
              src={require("./salman.png")}
            />
          </Row>
          <Row justify="center" className="profile-text-resp">
            <p>
              Hi, I'm Muhammad Salman Asif and I'm a react web developer with 6 months experience. I
              have excellent command over redux, route libraries, and have done several projects on
              react web app. Currently, I'm working on my final year project which is based on the
              react library. I'm about to complete my graduation and looking forward to the job
              opportunity.
            </p>
          </Row>
          <Row justify="center" align="middle" className="profile-contact-resp">
            <Col flex={1} className="profile-contact-icon">
              <WhatsAppOutlined />
            </Col>
            <Col flex={1} className="profile-contact-no">
              +923321318363
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: "5rem" }} id="skill">
        <Col xs={24} sm={18} md={12} lg={10} xl={10} className="profile-skil-resp">
          <Row justify="center" className="profile-skill-heading">
            <h2>Skills</h2>
          </Row>
          <Row style={{ marginTop: "3rem" }}>
            <ProgressBar title="html" percent={100} />
            <ProgressBar title="css" percent={80} />
            <ProgressBar title="sass" percent={90} />
            <ProgressBar title="Javascript" percent={95} />
            <ProgressBar title="React" percent={90} />
            <ProgressBar title="Problem solving" percent={95} />
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileSection;
