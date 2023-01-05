import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import Icon1 from "../../images/Anil 2.png"
import Icon2 from "../../images/Anil 3.png"
import Icon3 from "../../images/Anil 4.png"
import Icon4 from "../../images/Anil 6.png"
const Sec3 = () => {
  return (
    <section>
      <div className="container">
        <div className="sec3 _content">
        <h2 className="subtitle">Our Teams</h2>
        <hr />
          <Row>
            <Col>
              {" "}
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src={Icon4} />
                <Card.Body style={{ textAlign: "center"}}>
                  <Card.Title>CEO</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              {" "}
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src={Icon4} />
                <Card.Body style={{ textAlign: "center"}}>
                  <Card.Title>COO</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              {" "}
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src={Icon4} />
                <Card.Body>
                  <Card.Title style={{ textAlign: "center"}}>CTO</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              {" "}
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src={Icon4} />
                <Card.Body style={{ textAlign: "center"}}>
                  <Card.Title>CMO</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Sec3;
