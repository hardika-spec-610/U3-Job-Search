import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MyNav = (props) => {
  const navigate = useNavigate();
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#17a2b8" }}>
      <Container>
        <Navbar.Brand href="#home">Job Search</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#browse">Browse</Nav.Link>
          </Nav>
          <Nav>
            <Button onClick={() => navigate("/")} variant="warning">
              {props.buttonText}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
