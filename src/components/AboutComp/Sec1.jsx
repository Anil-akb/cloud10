import React from "react";
import { motion } from "framer-motion";
import "../../styles/AboutSec1.css"

const Sec1 = () => {
  return (
    <section>
      <div className="container">
        <div className="sec1-content">
          <motion.h2 className="subtitle about_h2"
          initial={{y: '-200vw'}}
          animate={{y:0}}
          // transition={{ delay: 0.4, duration: 0.5 }}
          >
            Build by Hoteliers for the Hotels
          </motion.h2>
          <hr />
          <motion.p className="about_p" 
            initial={{x: '-300vw'}}
            animate={{x:0}}
            transition={{ delay: 0.4, duration: 0.5 }}

          >
            Our company address help hotels who face revenue management
            challenges by optimizing profitability with a unique and powerful
            strategy that increases conversion, guest loyalty, operational
            efficiency, and revenue.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Sec1;
