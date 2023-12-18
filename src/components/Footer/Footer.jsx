import React from "react";
import "../Footer/footer.css";
import "remixicon/fonts/remixicon.css";
import logo from "../../images/Logo.png";
import { motion } from "framer-motion";


const quickLinks01 = [
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/#services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
  {
    path: "/resource",
    display: "Resources",
  },
];

const quickLinks02 = [
  {
    path: "#",
    display: "Privacy Policy",
  },
  {
    path: "#",
    display: "Terms of Use",
  },
  {
    path: "#",
    display: "GDPR",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer-desc">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <p className="small_text description">
              We are a revenue management company founded by hospitality
              veterans to help hotels to create and optimize opportunities and
              has built up an extensive track record with international hotel
              consulting & revenue management consulting services for
              independent hotels and resorts.
            </p>
          </div>
          <div className="footer_quick-links">
            <h3 className="quick_link-title">About Us</h3>
            <ul className="quick_link">
              {quickLinks01.map((item, index) => (
                <motion.li
                  className="quick_link-item"
                  key={index}
                  whileHover={{ scale: 1.3, originX: 0 }}
                >
                  <a href={item.path}> {item.display}</a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* <div className="footer_quick-links">
            <h3 className="quick_link-title">Legal</h3>
            <ul className="quick_link">
              {quickLinks02.map((item, index) => (
                <motion.li
                  className="quick_link-item"
                  key={index}
                  whileHover={{ scale: 1.3, originX: 0 }}
                >
                  <a href={item.path}>{item.display}</a>
                </motion.li>
              ))}
            </ul>
          </div> */}
        </div>
        <p className="copyright">Copyright {year}. All Rights Reserved</p>
        <div className="social_icon">
          <span>
            <a href="https://www.instagram.com/" target="_blank">
              <i class="ri-instagram-line"></i>
            </a>
          </span>
          <span>
            <a href="https://www.linkedin.com/" target="_blank">
              <i class="ri-linkedin-line"></i>
            </a>
          </span>
          <span>
            <i class="ri-facebook-line"></i>
          </span>
          <span>
            <i class="ri-twitter-line"></i>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
