import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  ButtonGroup,
  Button,
  NavDropdown,
  Form,
} from "react-bootstrap";
import "./navbar.scss";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navigation = ({ handleCreateAcc, logged, auth }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    auth.logout(() => navigate("/"));
  };

  return (
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
        {logged && (
          <>
            <Form>
              <div className="navbar__search-group d-none d-lg-flex">
                <Form.Control type="text" placeholder="O que você procura?" />
                <Button variant="link">
                  <FontAwesomeIcon icon={faSearch} color="#fff" />
                </Button>
              </div>
            </Form>

            <Button variant="outline-light" onClick={handleClick}>
              Sair
            </Button>
          </>
        )}

        {!logged && (
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
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
                      <Link to="/login">Pessoa Jurídica</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="4.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Button>
                <Button variant="outline-light" onClick={handleCreateAcc}>
                  Criar minha conta
                </Button>
              </ButtonGroup>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
};

export default Navigation;
