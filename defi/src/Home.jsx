import React from "react";
import Button from "./Button";
import "./home.css";

function Home() {
  return (
    <>
      <div className="head">
        <div className="company">
          <h1>yield</h1>
        </div>
        <div className="navLinks">
          <Button className="nav" link="about" name="About" />
          <Button className="nav" link="features" name="Features" />
          <Button className="nav" link="products" name="Products" />
          <Button className="nav" link="guide" name="Guide" />
          <Button className="signup" link="signup" name="Sign Up" />
        </div>
      </div>
    </>
  );
}

export default Home;
