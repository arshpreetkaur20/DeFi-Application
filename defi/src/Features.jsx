import React from "react";
import Container from "./Container";
import Header from "./Header";
import Button from "./Button";

import "./Features.css";

function Features() {
  return (
    <>
      <div className="heading">
        <h1>The destination for yield farming</h1>
        <img
          src="https://gatehub.net/blog/content/images/2020/05/AdobeStock_334632123.jpeg"
          alt="crypto"
        />
      </div>
      <div className="features">
        <Container className="f1">
          <h3>Secure</h3>
          <p>Our platform ensures top-notch security with audited smart contracts and multi-layer protection.</p>
        </Container>

        <Container className="f2">
          <h3>Reliable</h3>
          <p>Trustworthy and stable. Our yield farming pools offer consistent and reliable returns.</p>
        </Container>

        <Container className="f3">
          <h3>Seamless</h3>
          <p>Enjoy a seamless experience with user-friendly interfaces and effortless integration.</p>
        </Container>
      </div>

      <div className="detailContainer">
        <div className="header">
          <h1>
            "Maximize your Web3 token returns with Yield Farming Solutions"
          </h1>
        </div>
        <div className="detail">
          <p>
            Yield farming is a next-generation DeFi (Decentralized Finance)
            platform that empowers users to maximize their earnings. The
            platform allows users to stake their Web3 tokens and earn rewards
            through liquidity provision, staking, and yield optimization
            strategies. By integrating cutting-edge blockchain technology, the
            application ensures a decentralized, transparent, and secure
            environment for users to grow their crypto assets efficiently.
          </p>
        </div>
      </div>

      <div className='waitlist'>
        <Header className="prompt" title="Join the waitlist"></Header>
        <Button className="arrow" link="signup" name="Join"></Button>
      </div>
    </>
  );
}

export default Features;
