import React from "react";

import "./About.css";

function About() {
  return (
    <>
      <div className="info">
        <h1>The destination for crypto</h1>
        <img
          src="https://gatehub.net/blog/content/images/2020/05/AdobeStock_334632123.jpeg"
          alt="crypto"
        />
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

      <div className="know">
        <div className="text">
          <h1>Get to know us</h1>
          <p>
            Yield farming is a 100% student lead initiative. We built this in
            2024. A female all team based out of UPES,a uni in
            Dehradun,India.The team has a diverse set of skills coming from
            varied background all with the motivation to push forward open
            source and Web3.0. The team is open to constructive criticism and
            feedback on the product.
          </p>
        </div>
        <div className="img">
          <img src="src/assets/grow.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default About;
