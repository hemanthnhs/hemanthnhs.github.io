import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar className="justify-content-end" bg="light">
      <Nav.Link href="#work">
        <i class="bi bi-briefcase"></i>Work Experience
      </Nav.Link>
      <Nav.Link href="#projects">Projects</Nav.Link>
      <Nav.Link href="#certifications">Skills</Nav.Link>
    </Navbar>
  );
};

export default Header;
