import "./Header.css";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <Navbar className="justify-content-end" bg="light">
        <Nav.Link href="#work">
          <i class="bi bi-briefcase"></i>Work Experience
        </Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#certifications">About</Nav.Link>
      </Navbar>
    );
  }
}

export default Header;
