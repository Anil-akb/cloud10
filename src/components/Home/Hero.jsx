import React from "react";
import "../../styles/hero.css";
import { HashLink } from "react-router-hash-link";

import heroBg from "../../images/hero2.jpg";
const Hero = () => {
  return (
    <section className="hero_section">
      <div className="hero-img">
        <img src={heroBg} alt="" />
      </div>
      <div className="container hero_container">
        <div className="hero_wrapper">
          <div className="hero_content">
            <div>
              <h2>Manage Your Hotel Revenue </h2>
              <h2 className="highlight">Without Limits</h2>
            </div>
            <p className="description hero_desc">
              Our revenue management solutions help hotels to deploy and
              implement strategies through real-time data integrations and
              automation.
            </p>
            <div className="hero_btns">
              <button className="primary_btn">See Demo</button>
              <button className="secondary_btn">
                <HashLink
                  style={{ textDecoration: "none", color: "#fff" }}
                  to="/contact"
                >
                  Contact Us
                </HashLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
