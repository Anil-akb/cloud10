import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

import "../../styles/AboutSec2.css"

const Sec2 = () => {
  return (
    <section className="sec2-content">
      <div className="container">
        <div className="sec2_content ">
          <Container>
            <Row className="about_item-wrapper">
              <Col>
                <h2 className="sec_h2">Your Business + Our Strategy = More Revenue</h2>
              </Col>
              <Col>
                <div>
                  <p className="description sec_h2">
                    We are a revenue management company founded by hospitality
                    veterans to help hotels to create and optimize opportunities
                    and have built up an extensive track record with
                    international hotel consulting & revenue management
                    consulting services for independent hotels and resorts.
                  </p>


                  {/* <button className="secondary_btn">
                    <HashLink
                      style={{ textDecoration: "none", color: "#fff" }}
                      to="/contact"
                    >
                      Contact Now
                    </HashLink>
                  </button> */}


                  <button className="cta">
                    <span> <HashLink
                      style={{ textDecoration: "none"}}
                      to="/contact"
                    >
                      Contact Now
                    </HashLink></span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                      <path d="M1,5 L11,5" />
                      <polyline points="8 1 12 5 8 9" />
                    </svg>
                  </button>


                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Sec2;
