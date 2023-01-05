import React from "react";
import logo1 from "../../images/AWS.png";
import logo2 from "../../images/Booking.png";
import logo3 from "../../images/apple.png";
import logo4 from "../../images/Expedia.png";
import logo5 from "../../images/Googlee.png";
import logo6 from "../../images/Tesla.png";

import { Figure, Container, Row, Col, Card } from "react-bootstrap";
import "../../styles/partner.css";

const Sec4 = () => {
  return (
    <section className="sec4">
      <div className="container">
        <Container>
          <div className="wrap">
            <h2 className="subtitle">Our Partners</h2>
            <Figure className="client_img">
              <Figure.Image className="fig_img" alt="171x180" src={logo1} />
              <Figure.Image className="fig_img" alt="171x180" src={logo2} />
              <Figure.Image className="fig_img" alt="171x180" src={logo3} />
              <Figure.Image className="fig_img" alt="171x180" src={logo4} />
              <Figure.Image className="fig_img" alt="171x180" src={logo5} />
              <Figure.Image className="fig_img" alt="171x180" src={logo6} />
            </Figure>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Sec4;
