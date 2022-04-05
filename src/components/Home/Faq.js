import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";

const Faq = () => {
  return (
    <div className="my-5">
      <Container className="text-center">
        <div>
          <h1 className="pt-5">Frequently Asked Questions</h1>
          <p>
            We have put together some of the most common questions that we get
            asked a lot.
          </p>
        </div>
        <Row className="d-flex justify-content-center align-items-center my-5">
          <Col xs={12} md={6}>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Are the prices for two people?
                </Accordion.Header>
                <Accordion.Body>
                  No, the holiday prices are shown for one person. But the
                  prices are available for minimum of two people traveling
                  together.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Can I get refund for an unutilized service?
                </Accordion.Header>
                <Accordion.Body>
                  No, you cannot get refund for an unutilized service, if you
                  have already used part of the itinerary provided.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  What are the cancellation policies?
                </Accordion.Header>
                <Accordion.Body>
                  If you cancel the holiday 15 Days prior to the Travel Date -
                  50 % of Total Package Cost will be deducted, in case of
                  cancellation 10 Days prior to the Travel Date - 75 % of Total
                  Package Cost will be deducted, 100% of Package Cost will be
                  Non Refundable in case of holiday cancellation 05 Days prior
                  to the Travel Date.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Can I make a booking for a check-in date of today on the
                  website?
                </Accordion.Header>
                <Accordion.Body>
                  As long as a hotel room can be found available in our website,
                  you can book that.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  {" "}
                  How do I know if a discount has been given?
                </Accordion.Header>
                <Accordion.Body>
                  Discounted price will be shown beside the room price.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Faq;
