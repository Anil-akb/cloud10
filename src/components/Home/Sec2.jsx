import React from "react";
import "../../styles/homeSec2.css";
import { motion } from "framer-motion";
import heroDarkImg from "../../images/hero3.jpg";

const Sec2 = () => {
  return (
    <section>
      <div className="container">
        <div className="sec_wrapper">
          <motion.div
            className="sec_content"
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <h2>Do Better Business In the Changing Landscape</h2>
            <p className="description head_desc">
              The advanced technology adoption by customers is changing the
              entire business landscape. We help hotels with the modern revenue
              strategy with our technology solutions bridges hotels needs with
              customer's demands.
            </p>
            <p className="description">
              For us, revenue management is building the bridge between hotels
              and their customers a little differently. Our team is a bunch of
              hospitality veterans who help hotels identify opportunities and
              stay ahead of you competitors. Our team of specialists will be
              with you every step of the way, providing property-specific
              solutions and strategies that allow you better understand the
              insights and accelerate your business success.
            </p>
          </motion.div>
          <div className="sec_img">
            <img src={heroDarkImg} alt="hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec2;
