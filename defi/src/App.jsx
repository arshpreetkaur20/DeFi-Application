import React from "react";
import Button from "./Button";
import Container from "./Container";
import Header from "./Header";
import Paragraph from "./Paragraph";
import './App.css'

function App() {
  return (
    <>
      <div className="header">
        <div className="company">
          <h1>yield</h1>
        </div>
        <div className="navLinks">
          <Button className="nav" link="about" name="About" />
          <Button className="nav" link="features" name="Features" />
          <Button className="nav" link="products" name="Products" />
          <Button className="nav" link="guide" name="Guide" />
        </div>
        <Button className="signup" link="signup" name="Sign Up" />
      </div>

      {/* big container */}
      <>
      <Container className="landingcntr"></Container>
      <Header className="landingH" title="Yield farming crypto platfrom"></Header>
      <Header className="landingBrief" title="Earn crypto token - simple, safe, easy. Stake now!"></Header>a
      </>

      <div className="dashboardcntr">
        <Container className="dCntr"></Container>
      </div>

      <>
      <Header className="secondH" title="Explore the new era of financial services"></Header>
      <Paragraph className="secondBrief" data="Yield is an innovative crypto platform which issues token in cryptocurrency. The Platform provides a unique opportunity to earn rewards in the form of crypto."></Paragraph>
      </>

    <Header className="features" title="Key Features"></Header>

    <div className="featureCntr1">
      <Container className="fCntr1"></Container>
      <Container className="fCntr2"></Container>
    </div>

    <div className="featureCntr2">
      <Container className="fCntr1"></Container>
      <Header className="fCntr2Heading" title="2X"></Header>
      <Paragraph className="f2Brief" data="growth"></Paragraph>
    </div>

    </>
  );
}

export default App;
