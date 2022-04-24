import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import "./dashboard.scss";
import AccountBalance from "../components/accountBalance";

const Dashboard = ({ className }) => {
  const data = {
    latesteData: [
      { date: "22/07", description: "SAQUE 24h 012345", value: "300,00" },
      { date: "21/07", description: "SUPERMERCADO 12657", value: "275,90" },
      { date: "20/07", description: "NETFLIX 85452", value: "30,00" },
      { date: "15/07", description: "FARMÁCIA 52147", value: "350,00" },
    ],

    futureData: [
      { date: "22/08", description: "SALÁRIO 24h 012345", value: "3.000,00" },
      { date: "21/08", description: "NETFLIX 12657", value: "275,90" },
      { date: "15/08", description: "AULA DE CANTO 52147", value: "350,00" },
    ],
  };

  return (
    <Container className={`dashboard py-5 ${className ? className : ""}`}>
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
            <Button
              className="dashboard__button"
              variant="link"
              size="lg"
              block
            >
              Pagamentos
            </Button>
            <Button
              className="dashboard__button"
              variant="link"
              size="lg"
              block
            >
              Extrato
            </Button>
          </Row>
        </Col>
        <AccountBalance data={data} />
      </Row>
    </Container>
  );
};

export default Dashboard;
