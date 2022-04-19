import React from "react";
import { Col, Container, Row, Accordion } from "react-bootstrap";
import "./FAQ.scss";

const Faq = () => (
  <section className="faq">
    <Container className="py-5">
      <h3 className="faq__title">Dúvidas Frequentes</h3>
      <Row className="d-flex align-itens-center justify-content-center">
        <Col xs={12} className="d-lg-none mb-2">
          <Row className="faq__icons">
            <Col className="m-3">
              <i class="fa-solid fa-credit-card"></i>
            </Col>
            <Col className="m-3">
              <i class="fa-solid fa-wallet"></i>
            </Col>
            <Col className="m-3">
              <i class="fa-solid fa-shield-halved"></i>
            </Col>
            <Col className="m-3">
              <i class="fa-solid fa-user-tie"></i>
            </Col>
          </Row>
        </Col>

        <Row className="faq__icons">
          <Col xs={12} lg={5} className="d-none d-lg-block">
            <section className="mb-3 pb-4">
              <Col className="mb-3" textClassName="lead">
                <i class="fa-solid fa-credit-card"></i>
                &nbsp;&nbsp;Cartão de Crédito e Débito
              </Col>
              <Col className="mb-3" textClassName="lead">
                <i class="fa-solid fa-wallet"></i>
                &nbsp;&nbsp;Conta e Abertura
              </Col>
              <Col className="mb-3" textClassName="lead">
                <i class="fa-solid fa-shield-halved"></i>
                &nbsp;&nbsp;Token digital
              </Col>
              <Col className="mb-3" textClassName="lead">
                <i class="fa-solid fa-user-tie"></i>
                &nbsp;&nbsp;Produtos e Serviços
              </Col>
            </section>
          </Col>
          <Col xs={12} lg={7}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item className="faq__card" eventKey="0">
                <Accordion.Header>Lorem ipsum dolor sit amet</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="faq__card" eventKey="1">
                <Accordion.Header>Sed auctor tempus nulla</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="faq__card" eventKey="2">
                <Accordion.Header>Duis id turpis orci.</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="faq__card" eventKey="3">
                <Accordion.Header>
                  Curabitur volutpat fringilla odio, vitae molestie turpis.
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Row>
    </Container>
  </section>
);

export default Faq;
