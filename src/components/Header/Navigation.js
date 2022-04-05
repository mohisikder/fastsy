import React from "react";
import "./Header.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navigation = () => {
  const { user, logout } = useAuth();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        fixed="top"
        className="shadow"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            Fast<span className="text-danger">sy</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/tours">
                Tours
              </Nav.Link>
              <Nav.Link as={Link} to="/destination">
                Destination
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
              {user?.email && (
                <Nav.Link as={Link} to="/dashboard">
                  Dashboard
                </Nav.Link>
              )}
              {user?.email && <Nav.Link>{user?.email}</Nav.Link>}
            </Nav>
            {user?.email ? (
              <Button onClick={logout} variant="danger">
                Logout
              </Button>
            ) : (
              <Button variant="danger" size="sm">
                <Nav.Link className="text-white" as={Link} to="/login">
                  Login
                </Nav.Link>
              </Button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
