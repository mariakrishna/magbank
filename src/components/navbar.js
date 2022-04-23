import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  ButtonGroup,
  Button,
  NavDropdown,
} from "react-bootstrap";
import "./navbar.scss";
import logo from "../assets/logo.svg";

const Navigation = ({ handleCreateAcc }) => (
  <Navbar expand="lg" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <Link to="/">
          <img
            src={logo}
            height="30"
            className="d-inline-block align-top"
            alt="MagBank logo"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#cartao">Cartão</Nav.Link>
          <Nav.Link href="#quemsomos">Quem Somos</Nav.Link>
          <Nav.Link href="#faq">FAQ</Nav.Link>
        </Nav>
        <ButtonGroup aria-label="Basic example">
          <Button variant="outline-light">
            <NavDropdown title="Acessar minha conta" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">
                <Link to="/login">Pessoa Física</Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                Pessoa Jurídica
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Button>
          <Button variant="outline-light" onClick={handleCreateAcc}>
            Criar minha conta
          </Button>
        </ButtonGroup>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
