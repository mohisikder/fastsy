import React from "react";
import "../Header/Header.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <div className="banner__section">
        <Container>
          <Row>
            <Col md={6} xs={12}>
              <div className="banner__info">
                <h5 className="subtitle">Fastsy Courier</h5>
                <h2 className="section__title">
                  Reliable Delivery <br /> for Your Business.
                </h2>
                <p className="text">
                  Fastsy Courier guarantees reliable delivery of your product to
                  your customer, at the right location in the right time through
                  its efficient distribution management.
                </p>
                <Button variant="danger" className="banner__btn">
                  Become a Merchant <FaArrowRight className="ms-2" />
                </Button>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="banner__image"></div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Banner;
