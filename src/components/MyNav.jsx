import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import LogoNetflix from "../assets/logo.png";
import { Search } from "react-bootstrap-icons";
import { Bell } from "react-bootstrap-icons";
import { PersonCircle } from "react-bootstrap-icons";

function MyNav() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={LogoNetflix} width="100" height="60" className="d-inline-block align-top" alt="Netflix logo" />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">TV Shows</Nav.Link>
            <Nav.Link href="#link">Movies</Nav.Link>
            <Nav.Link href="#link">Recently Added</Nav.Link>
            <Nav.Link href="#link">My List</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="me-2" href="#">
              <Search />
            </Nav.Link>
            <Nav.Link className="me-2" href="#">
              KIDS
            </Nav.Link>
            <Nav.Link className="me-2" href="#">
              <Bell />
            </Nav.Link>
            <Nav.Link className="me-2" href="#">
              <PersonCircle />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
