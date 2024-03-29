import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="w-full">
      <Navbar.Brand href="/">Bank</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" justify variant="tabs">
          <Nav.Link as={Link} eventKey="link-1" to="/">Home</Nav.Link>
          <Nav.Link as={Link} eventKey="link-2" to="/create-account">Create Account</Nav.Link>
          <Nav.Link as={Link} eventKey="link-3" to="/deposit">Deposit</Nav.Link>
          <Nav.Link as={Link} eventKey="link-4" to="/withdraw">Withdraw</Nav.Link>
          <Nav.Link as={Link} eventKey="link-5" to="/all-data">All Data</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
