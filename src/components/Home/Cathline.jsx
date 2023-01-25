import React from "react";
import { motion } from "framer-motion";
import "../../styles/cathline.css";

const Cathline = () => {
  return (
    <section className="cathline">
      <div className="container">
        <div className="cathline_wrapper">
          <div className="cathline_content">
            <h4>
              Take Your Revenue Management to the Next Level{" "}
              <span className="highlight">With us </span>
            </h4>
          </div>
          <div className="cathlin_btn">
            <motion.button className="primary_btn"
             whileHover={{
                scale: 1.1
              }}
            >
              <a href="tel:+91 9777403555">Request a Call</a>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cathline;
