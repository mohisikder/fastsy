import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";

const NewsLetter = () => {
  return (
    <div className="my-5" style={{ backgroundColor: "#fdfdef" }}>
      <Container>
        <Row className="py-5 align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="news-letter-img h-25">
              <img
                className="img-fluid w-75"
                src={`https://www.stoodnt.com/blog/wp-content/uploads/2020/06/travel-photographer-careers.jpg`}
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h2 className="display-6 my-4">Sign Up For Our Newsletter</h2>
            <p className="lead">
              Seared scallops on a bed of creamy corn spiked with poblano chiles
              borders on fancy food.
            </p>
            <Form></Form>
            <form action="#" className="form-controll">
              <input
                class="form-control w-75"
                type="text"
                placeholder="Your Email"
              />
              <div>
                <Button variant="danger">Subscribe</Button>
              </div>
            </form>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default NewsLetter;
