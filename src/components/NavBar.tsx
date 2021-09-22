import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { RouteComponentProps, withRouter } from "react-router";

const NavBar = ({ location, history }: RouteComponentProps) => {
  const [query, setQuery] = useState("");
  const handleInput = (value: string) => {
    setQuery(value as string);
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Search Music</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default withRouter(NavBar);
