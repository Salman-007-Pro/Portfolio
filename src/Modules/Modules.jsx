import React, { Component } from "react";
import HeaderSection from "Modules/Pages/HeaderSection/HeaderSection";
import ProfileSection from "Modules/Pages/ProfileSection/ProfileSection";
import ServiceSection from "Modules/Pages/ServiceSection/ServiceSection";
class Modules extends Component {
  render() {
    return (
      <>
        <HeaderSection />
        <ProfileSection />
        <ServiceSection />
        <div style={{ backgroundColor: "red", width: "100%", height: "100vh" }}></div>
        <div style={{ backgroundColor: "blue", width: "100%", height: "100vh" }}></div>
        <div style={{ backgroundColor: "yellow", width: "100%", height: "100vh" }}></div>
        <div style={{ backgroundColor: "orange", width: "100%", height: "100vh" }}></div>
        <div style={{ backgroundColor: "purple", width: "100%", height: "100vh" }}></div>
      </>
    );
  }
}
export default Modules;
