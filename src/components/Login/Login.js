import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  //   const { user, loginUser, isLoading, error } = useAuth();

  //   const history = useHistory();
  //   const location = useLocation();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLogin = (e) => {
    // loginUser(loginData.email, loginData.password);
    e.preventDefault();
  };

  const handleGoogleLogin = () => {
    console.log("Clicked");
  };
  return (
    <>
      <Container className="text-center py-5">
        <Row>
          <Col xs={12} md={7}>
            <img
              className="w-75"
              src={`https://i.ibb.co/k6zhSk1/undraw-secure-login-pdn4.png`}
              alt=""
            />
          </Col>
          <Col xs={12} md={5}>
            <div
              style={{ backgroundColor: "#f8f8f8", height: "100%" }}
              className="shadow"
            >
              <h3 className="py-4">Login</h3>
              <div className="d-flex justify-content-center align-items-center">
                {/* {!isLoading && ( */}
                <Form onSubmit={handleLogin}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      onChange={handleOnChange}
                      name="email"
                      type="email"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      onChange={handleOnChange}
                      name="password"
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Button className="w-100" variant="danger" type="submit">
                      Login
                    </Button>
                  </Form.Group>{" "}
                  <br />
                  <p>---------- OR Login ----------</p>
                  <button
                    onClick={handleGoogleLogin}
                    className="btn btn-danger"
                  >
                    <i className="me-3 fab fa-google"></i>Google Sign In
                  </button>
                  <br />
                  <NavLink style={{ textDecoration: "none" }} to="/register">
                    <Button
                      variant="text"
                      style={{ marginBottom: "40px", marginTop: "15px" }}
                    >
                      New User? <strong>Please Register</strong>
                    </Button>
                  </NavLink>
                </Form>
                {/* )} */}
                {/* {isLoading && <Spinner animation="grow" />} */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
