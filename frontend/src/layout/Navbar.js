import react from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from "../img/GlobalUnderstandingLogo.37b38633.png";

import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <Navbar>
      <Container fluid >
        <Navbar.Brand href="#Home" style={{position: 'absolute', top:'5px'}} >
          <img src={logo} style={{ height: "25px" }} /> The Five Principles
        </Navbar.Brand>
        <Nav className="me-auto" style={{display:'flex',marginLeft:'auto', marginRight:'auto'}}>
          <Nav.Link href="#About" >About</Nav.Link>
          <Nav.Link href="#Program" >Program</Nav.Link>
          <Nav.Link href="#Contact" >Contact</Nav.Link>
          <Nav.Link ><Link to="/login"> Log In </Link></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    )
}