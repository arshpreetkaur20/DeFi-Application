import React from "react";
import Button from "./Button";
import Container from "./Container";
import Header from "./Header";
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

      <Header className="secondH" title="Explore the new era of financial services"></Header>

    </>
  );
}

export default App;
