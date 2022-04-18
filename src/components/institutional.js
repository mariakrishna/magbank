import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./institutional.scss";

const Institutional = () => (
  <div className="institutional text-light py-5">
    <Container className="ps-5">
      <Row>
        <Col xs={12} lg={5}></Col>
        <Col xs={12} lg={7}>
          <h3>Já Nascemos digital</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            luctus, lectus in dignissim bibendum, neque nisi suscipit erat, id
            tristique sem libero at sem. In imperdiet mi a viverra condimentum.
            Donec ullamcorper eleifend tincidunt. Integer vitae vehicula justo.
            Curabitur posuere metus at tristique hendrerit. In sollicitudin in
            est eu accumsan. Duis commodo molestie vestibulum. Sed non luctus
            nisl.
          </p>
          <section className="mb-3 pb-4">
            <Col>
              <i class="fa-solid fa-mobile-screen 2x"></i>
              &nbsp;&nbsp;Sem fila e sem burocracira
            </Col>
            <Col>
              <i class="fa-solid fa-mobile 2x"></i>
              &nbsp;&nbsp;Simples e prático
            </Col>
            <Col>
              <i class="fa-solid fa-globe 2x"></i>
              &nbsp;&nbsp;Abertura de conta 100% online
            </Col>
            <Col>
              <i class="fa-solid fa-shield-halved 2x"></i>
              &nbsp;&nbsp;Transações mais seguras
            </Col>
          </section>

          <Button variant="outline-light">Abra sua Conta!</Button>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Institutional;
