import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import "./dashboard.scss";

const Dashboard = () => (
  <Container className="dashboard py-5">
    <Row>
      <Col xs={12} lg={4}>
        <Row className="align-itens-center mb-5">
          <Col xs={3}>
            <span className="dashboard__useravatar">
              <FontAwesomeIcon icon={faCircle} color="#f8f9fa" size="5x" />
              <FontAwesomeIcon
                icon={faUser}
                color="#7c7d7d"
                size="3x"
                className="dashboard__usericon"
              />
            </span>
          </Col>
          <Col xs={9}>
            <h4>Nome do Usuário</h4>
            <p className="text-muted">ag: 1234 c/c: 4321-5</p>
          </Col>

          <Button
            className="dashboard__button text-left"
            variant="link"
            size="lg"
            block
          >
            Minha Conta
          </Button>
          <Button className="dashboard__button" variant="link" size="lg" block>
            Pagamentos
          </Button>
          <Button className="dashboard__button" variant="link" size="lg" block>
            Extrato
          </Button>
        </Row>
      </Col>
      <Col xs={12} lg={3} className="mt-lg-5 pt-lg-4">
        <h3 className="mt-1 mb-5">Conta Corrente</h3>
        <h6>
          <small>
            <strong>Saldo em conta corrente</strong>
          </small>
        </h6>
        <h4 className="text-success mb-4">
          <small>R$</small>3.500<small>,00</small>
        </h4>
        <h6>
          <small>
            <strong>Cheque Especial</strong>
          </small>
        </h6>
        <p className="mb-0">Limite disponível</p>
        <p className="mb-4">R$ 5.000,00</p>
        <Button variant="secondary">Ver Extrato</Button>
      </Col>
      <Col xs={12} lg={5}></Col>
    </Row>
  </Container>
);

export default Dashboard;
