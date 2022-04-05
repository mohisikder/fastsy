import React from "react";
import "../Header/Header.css";
import { Button, Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <>
      <div className="banner__section">
        <Container>
          <Row>
            <Col md={12} xs={12}>
              <div className="banner__info">
                <h5 className="title">Love where you're going</h5>
                <p className="text">
                  Book incredible things to do around the world.
                </p>
                <Button variant="danger">Explore</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Banner;
