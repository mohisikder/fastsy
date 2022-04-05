import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="bg-dark text-white mt-5 text-left">
        <Container className="py-5">
          <Row>
            <Col md={3} xs={12}>
              <h1>
                Fast<span className="text-danger">sy</span>
              </h1>
              <span style={{ fontSize: "0.85rem" }}>
                ISO 9001: 2015, ISO 27001: 2013 Certified Company
              </span>
              <br />
              <span style={{ fontSize: "0.85rem" }}>
                CIN: U63090DL2011PLC221234
              </span>
            </Col>
            <Col md={2} xs={12}>
              <p className="text-danger">Company</p>
              <Nav defaultActiveKey="/" className="flex-column">
                <Nav.Link as={Link} className="text-white" to="/home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} className="text-white" to="/about">
                  About Us
                </Nav.Link>
                <Nav.Link as={Link} className="text-white" to="/services">
                  Services
                </Nav.Link>
                <Nav.Link as={Link} className="text-white" to="/pricing">
                  Pricing
                </Nav.Link>
              </Nav>
            </Col>
            <Col md={2} xs={12}>
              <p className="text-danger">Get in touch</p>
              <Nav defaultActiveKey="/" className="flex-column">
                <Nav.Link as={Link} className="text-white" to="/support">
                  Support
                </Nav.Link>
                <Nav.Link as={Link} className="text-white" to="/careers">
                  Careers
                </Nav.Link>
                <Nav.Link as={Link} className="text-white" to="/shipping">
                  Start Shipping
                </Nav.Link>
                <Nav.Link as={Link} className="text-white" to="/query">
                  Raise a Query
                </Nav.Link>
              </Nav>
            </Col>
            <Col md={5} xs={12}>
              <p className="text-danger">Information Security Policy</p>
              <span style={{ fontSize: "0.85rem" }}>
                Delhivery is committed to safeguarding the confidentiality,
                integrity and availability of all physical and electronic
                information assets of the organization. We ensure that the
                regulatory, operational and contractual requirements are
                fulfilled.
              </span>
              <p className="text-danger">Disclaimer</p>
              <span style={{ fontSize: "0.85rem" }}>
                Operational metrics listed are as of June 30, 2021
              </span>
            </Col>
          </Row>
        </Container>
        <div className="bg-black py-3 mb-0 ">
          <Container>
            <Row className="d-flex justify-content-between align-items-center">
              <Col md={8} xs={12}>
                <div>
                  Copyright &copy; 2021 All rights reserved | This template is
                  made with &hearts; by{" "}
                  <a href="https://github.com/mohisikder">Mohiuddin Sikder</a>
                </div>
              </Col>
              <Col md={4} xs={12}>
                <div className="fs-3">
                  <span className="me-3 fs-3">
                    <FaFacebookSquare />
                  </span>
                  <span className="me-3 fs-3">
                    <FaGooglePlusSquare />
                  </span>
                  <span className="me-3 fs-3">
                    <FaLinkedin />
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Footer;
