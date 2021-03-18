import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

import styles from "./navbar.module.css";

export default function Contacts() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img src="/img/Logo1.svg"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Servicii" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Tipar format larg
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Tipar poligrafic
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Publicitate exterioara
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Tipar pe stofe si alte materiale
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                Design grafic
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/aboutUs">Despre Noi</Nav.Link>
            <Nav.Link href="/contacts">Contacte</Nav.Link>
            <Nav.Link >
              <img src="/img/phone1.png" />
              068-111-919
            </Nav.Link>
            <Nav.Link >
              <img src="/img/pin1.png" />
              Ion Creanga 45
            </Nav.Link>
            <NavDropdown title="MD" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1.1">MD</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2.2">RU</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
