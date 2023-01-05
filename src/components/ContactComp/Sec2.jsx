import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import "../../styles/sec2contact.css";

const Sec2 = () => {
  const [formStatus, setFormStatus] = React.useState("Submit");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submited");
    const { name, email, message } = e.target.elements;
    let Confirm= {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log("Confirm");
  };

  return (
    <section>
      <div className="container">
        <Row className="row">
          <Col>
            <div className="form_content">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="email">
                    Business Email
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="number">
                    Phone
                  </label>
                  <input
                    className="form-control"
                    type="tel"
                    id="tel"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="number">
                    Country Name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="text-country"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="text">
                    Organization
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="text"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="message">
                    Message
                  </label>
                  <textarea className="form-control" id="message" required />
                </div>
                <button className="btn btn-primary" type="submit">
                  {formStatus}
                </button>
              </form>
            </div>
          </Col>
          <Col>
            <div className="map_content">
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.17641056821!2d72.83381081421453!3d19.187495753445983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7dd2e4d4645%3A0xf43400f20dbacb5a!2sKolko%20Industries%20LLP!5e0!3m2!1sen!2sin!4v1670482641641!5m2!1sen!2sin"
                width="600"
                height="450"
                frameBorder="0"
                style={{ border: "0" }}
                allowFullScreen="true"
                aria-hidden="false"
                tabIndex="0"
              ></iframe> */}

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.2726372701854!2d75.79169726436544!3d26.89484121733527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db43d27873b63%3A0xdfea79f3211a2539!2sUnique%20Aura%20Apartment!5e0!3m2!1sen!2sin!4v1672894035190!5m2!1sen!2sin"
                width="600"
                height="590"
                style={{ border: "0" }}
                allowFullScreen="true"
                aria-hidden="false"
                tabIndex="0"
                // loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Sec2;
