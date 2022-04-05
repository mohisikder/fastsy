import React from "react";
import "../Header/Header.css";
import { Col, Container, Row } from "react-bootstrap";

const Features = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={4} xs={12}>
            <div className="features__info">
              <img
                src="https://tomap.travelerwp.com/wp-content/uploads/2019/01/ico_localguide.svg"
                alt=""
              />
              <div className="feature">
                <h3>1,000+ local guides</h3>
                <p>Morbi semper fames lobortis ac hac penatibus</p>
              </div>
            </div>
          </Col>
          <Col md={4} xs={12}>
            <div className="features__info">
              <img
                src="https://tomap.travelerwp.com/wp-content/uploads/2019/01/ico_maps.svg"
                alt=""
              />
              <div className="feature">
                <h3>Handcrafted experiences</h3>
                <p>Morbi semper fames lobortis ac hac penatibus</p>
              </div>
            </div>
          </Col>
          <Col md={4} xs={12}>
            <div className="features__info">
              <img
                src="https://tomap.travelerwp.com/wp-content/uploads/2019/01/ico_adventurous.svg"
                alt=""
              />
              <div className="feature">
                <h3>96% happy travelers</h3>
                <p>Morbi semper fames lobortis ac hac penatibus</p>
              </div>
            </div>
          </Col>
        </Row>
        <hr style={{ color: "gray" }} />
      </Container>
    </>
  );
};

export default Features;
