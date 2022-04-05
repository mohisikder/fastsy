import React from "react";
import "../Header/Header.css";
import "../Home/Home.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import {
  FaClock,
  FaDollarSign,
  FaMapMarkerAlt,
  FaRegStar,
} from "react-icons/fa";

const TrandTours = () => {
  return (
    <>
      <div className="trand__tours__section">
        <Container>
          <div className="under__line"></div>
          <h2 className="section__title">Tranding Tours</h2>
          <Row xs={12} md={4} className="g-4">
            {Array.from({ length: 8 }).map((_, idx) => (
              <Col>
                <Card>
                  <div className="tour__img">
                    <Card.Img
                      variant="top"
                      src="https://tomap.travelerwp.com/wp-content/uploads/2015/01/13-american-towns-that-look-exactly-like-places-in-europe.jpg-680x500.png"
                    />
                  </div>
                  <Card.Body>
                    <div className="location mb-2">
                      <FaMapMarkerAlt />
                      <span className="ms-2">Nevada, American</span>
                    </div>
                    <Card.Title>
                      Los Angeles to San Francisco Express
                    </Card.Title>
                    <Card.Text>
                      <div className="reviews__items">
                        <div className="rating">
                          <FaRegStar className=" ms-1 rating-bg-fill" />
                          <FaRegStar className=" ms-1 rating-bg-fill" />
                          <FaRegStar className=" ms-1 rating-bg-fill" />
                          <FaRegStar className=" ms-1 low-star" />
                          <FaRegStar className=" ms-1 low-star" />
                        </div>
                        <div className="reviews">
                          <span>3 Reviews</span>
                        </div>
                      </div>
                      <div className="prices d-flex justify-content-between">
                        <div className="duration">
                          <FaClock />
                          <span className="ms-2">8 Hours</span>
                        </div>
                        <div>
                          <FaDollarSign />
                          <span className="2">599</span>
                        </div>
                      </div>
                      <Button className="card__btn" variant="danger">
                        Booking Now
                      </Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default TrandTours;
