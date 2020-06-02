import React, { Component } from "react";
import HeaderSection from "Modules/Pages/HeaderSection/HeaderSection";
import ProfileSection from "Modules/Pages/ProfileSection/ProfileSection";
import ServiceSection from "Modules/Pages/ServiceSection/ServiceSection";
import EducationSection from "Modules/Pages/EducationSection/EducationSection";
import PortfolioSection from "Modules/Pages/PortfolioSection/PortfolioSection";
import FooterSection from "Modules/Pages/FooterSection/FooterSection";
class Modules extends Component {
  render() {
    return (
      <>
        <HeaderSection />
        <ProfileSection />
        <EducationSection />
        <ServiceSection />
        <PortfolioSection />
        <FooterSection />
      </>
    );
  }
}
export default Modules;
