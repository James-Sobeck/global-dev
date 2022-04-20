import react from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from "../img/GlobalUnderstandingLogo.37b38633.png";

import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <Navbar>
      <Container fluid>
        <Navbar.Brand href="#Home" style={{ color: "white" }} >
          <img src={logo} style={{ height: "25px" }} /> The Five Principles
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#About" style={{ color: "white" }}>About</Nav.Link>
          <Nav.Link href="#Program" style={{ color: "white" }}>Program</Nav.Link>
          <Nav.Link href="#Contact" style={{ color: "white" }}>Contact</Nav.Link>
          <Nav.Link style={{ color: "white" }}><Link to="/login"> Log In </Link></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    )
}