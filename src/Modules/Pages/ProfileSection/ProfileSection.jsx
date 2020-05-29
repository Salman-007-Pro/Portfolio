import React from "react";
import "./ProfileSection.scss";
import { Avatar, Progress } from "antd";
import { UserOutlined, WhatsAppOutlined } from "@ant-design/icons";
import ProgressBar from "components/ProgressBar/ProgressBar";
const ProfileSection = (props) => {
  return (
    <div className="aboutUs-wrapper">
      <div className="aboutUs-heading">
        <h1>About Us</h1>
      </div>
      <div className="profile-wrapper">
        <div className="profile-info">
          <div className="profile-info-box">
            <div className="profile-pic">
              <Avatar
                size={100}
                shape="circle"
                icon={<UserOutlined />}
                src={require("./salman.png")}
              />
            </div>
            <div className="profile-text">
              <p>
                Hi, I'm Muhammad Salman Asif and I'm a react web developer. I have fully controlled
                redux, route libraries and I have done several projects on react web app. Currently,
                I'm working on my final year project fully based on the react library and I'm a
                final year student looking for a job opportunity.
              </p>
            </div>
            <div className="profile-contact">
              <div className="profile-contact-icon">
                <WhatsAppOutlined />
              </div>
              <div className="profile-contact-no">+923321318363</div>
            </div>
          </div>
        </div>
        <div className="profile-skill">
          <div className="profile-info-box">
            <div className="profile-skill-heading">
              <h2>Skills</h2>
            </div>
            <div className="profile-skill-box">
              <ProgressBar title="html" percent={100} />
              <ProgressBar title="css" percent={80} />
              <ProgressBar title="sass" percent={90} />
              <ProgressBar title="Javascript" percent={95} />
              <ProgressBar title="React" percent={90} />
              <ProgressBar title="Problem solving" percent={95} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
