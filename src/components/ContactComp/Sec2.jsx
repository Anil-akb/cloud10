import { Row, Col, Container } from "react-bootstrap";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import "../../styles/sec2contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qj5wlz7",
        "template_mx4ortl",
        form.current,
        "XILVNh6hT3uCq-pXv"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section>
      <div className="container">
        <Row className="row">
          <Col className="contact_form">
            <StyledContactForm>
              <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" required />

                <label>Email</label>
                <input type="email" name="user_email" required />

                <label>Phone Number</label>
                <input type="tel" name="user_phone" required />

                <label>Company Name</label>
                <input name="company_name" required />

                <label>Message</label>
                <textarea name="message" required />

                <input type="submit" value="Send" />
              </form>
            </StyledContactForm>
          </Col>
          <Col>
            <div className="map_content">
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

export default Contact;



// Styles
const StyledContactForm = styled.div`
  width: 300px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgb(249, 105, 14);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;