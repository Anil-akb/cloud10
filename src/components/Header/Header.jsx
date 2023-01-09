import React from "react";
import "./header.css";
import { HashLink } from "react-router-hash-link";

import logo from "../../images/Logo.png";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <Navbar expand="xl" className="mainNav">
      <Container>
        <Navbar.Brand>
          <HashLink to="/">
            <img className="logo" src={logo} alt="" />
          </HashLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbarr" defaultActiveKey="#">
            <Nav.Link className="menu">
              <HashLink className="link" to="/">
                Home
              </HashLink>
            </Nav.Link>
            <Nav.Link className="menu">
              <HashLink className="link" to="/about">
                About Us
              </HashLink>
            </Nav.Link>
            <Nav.Link className="menu" href="#resource">
              <HashLink className="link" to="/resource">
                Resources
              </HashLink>
            </Nav.Link>
            <Nav.Link className="menu">
              <HashLink className="link" to="/contact">
                Contact
              </HashLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
