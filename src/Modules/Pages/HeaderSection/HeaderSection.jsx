import React, { Component } from "react";
import Header from "components/Header/Header";
import ReactRotatingText from "react-rotating-text";
import "./HeaderSection.scss";
class HeaderSection extends Component {
  render() {
    return (
      <>
        <div className="header-section-wrapper">
          <Header />
          <div className="header-box">
            <h1 className="header-text-heading-primary">Assalamualaikum</h1>
            <h2 className="header-text-heading-secondary">I'm Muhammad Salman Asif</h2>
            <ReactRotatingText
              items={["Web Designer", "Front-End Developer", "React Developer", "Web Developer"]}
              typingInterval={100}
              deletingInterval={100}
              className="header-text-heading-typewriter"
            />
          </div>
        </div>
      </>
    );
  }
}
export default HeaderSection;
