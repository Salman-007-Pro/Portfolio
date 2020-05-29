import React, { Component } from "react";
import Container from "components/Container/Container";
import { FacebookFilled } from "@ant-design/icons";
import "./Header.scss";
class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <Container>
          <div className="header-nav">
            <div className="header-logo">
              <h2>
                <em>Welcome</em>
              </h2>
            </div>
            <div className="header-list">
              <ul className="header-list-item">
                <li>service</li>
                <li>skill</li>
                <li>about me</li>
                <li>education</li>
                <li>portfolio</li>
              </ul>
            </div>
            <div className="header-social">
              <FacebookFilled />
            </div>
          </div>
        </Container>
      </div>
    );
    {
      /* <div className="header-logo-text"></div> */
    }
  }
}
export default Header;
