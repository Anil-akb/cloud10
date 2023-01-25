import React from "react";
import "../../styles/hero.css";
import { HashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";
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
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <h2>Manage Your Hotel Revenue </h2>
              <h2 className="highlight">Without Limits</h2>
            </motion.div>
            <motion.p
              className="description hero_desc"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              Our revenue management solutions help hotels to deploy and
              implement strategies through real-time data integrations and
              automation.
            </motion.p>
            <motion.div
              className="hero_btns"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              {/* <motion.button
                className="primary_btn"
                whileHover={{
                  scale: 1.3,
                }}
              >
                See Demo
              </motion.button> */}
              <motion.button
                className="secondary_btn"
                whileHover={{
                  scale: 1.3,
                }}
              >
                <HashLink
                  style={{ textDecoration: "none", color: "#fff" }}
                  to="/contact"
                >
                  Contact Us
                </HashLink>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
