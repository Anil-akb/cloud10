import React from "react";
import "../../styles/hero.css";
import { HashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";
import heroBg from "../../images/hero2.jpg";

const Hero = () => {
  return (
    <section className="hero_section">
      <div className="hero-img">
        <motion.img src={heroBg} alt="" loading="lazy"
        />
      </div>
      <div className="container hero_container">
        <div className="hero_wrapper">
          <div className="hero_content">
            <motion.div
              initial={{ opacity: 0, x: 900 }}
              animate={{ opacity: 2, x: 0 }}
              // exit={{ opacity: 0, x: 30 }}
              transition={{ delay: 1.0, duration: 1.0 }}
            >
              <h2>Manage Your Hotel Revenue </h2>
              <h2 className="highlight">Without Limits</h2>
            </motion.div>
            <motion.p
              className="description hero_desc"
              initial={{ opacity: 0, x: -900 }}
              animate={{ opacity: 2, x: 0 }}
              // exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 1.5 }}
            >
              Our revenue management solutions help hotels to deploy and
              implement strategies through real-time data integrations and
              automation.
            </motion.p>
            <div className="hero_btns">
              <motion.button
                className="primary_btn"
                whileHover={{
                  scale: 1.1,
                  textShadow: "#00008B",
                  boxShadow: "#0041C2",
                }}
              >
                See Demo
              </motion.button>
              <motion.button
                className="secondary_btn"
                whileHover={{
                  scale: 1.3
                }}
              >
                <HashLink
                  style={{ textDecoration: "none", color: "#fff" }}
                  to="/contact"
                >
                  Contact Us
                </HashLink>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
