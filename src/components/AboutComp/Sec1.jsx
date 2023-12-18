import React from "react";
import { motion } from "framer-motion";
import "../../styles/AboutSec1.css";

const Sec1 = () => {
  return (
    <section>
      <div className="container">
        <motion.div
          className="sec1-content"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h2 className="subtitle about_h2">
            Build by Hoteliers for the Hotels
          </h2>
          <hr />
          <p>
            Our company address help hotels who face revenue management
            challenges by optimizing profitability with a unique and powerful
            strategy that increases conversion, guest loyalty, operational
            efficiency, and revenue.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Sec1;
