import React from "react";
import { Container, Row, Col, Button, Tabs, Tab, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import "./dashboard.scss";

const Dashboard = () => {
  const lastestData = [
    { date: "22/07", description: "SAQUE 24h 012345", value: "300,00" },
    { date: "21/07", description: "SUPERMERCADO 12657", value: "275,90" },
    { date: "20/07", description: "NETFLIX 85452", value: "30,00" },
    { date: "15/07", description: "FARMÁCIA 52147", value: "350,00" },
  ];

  const futureData = [
    { date: "22/08", description: "SALÁRIO 24h 012345", value: "3.000,00" },
    { date: "21/08", description: "NETFLIX 12657", value: "275,90" },
    { date: "15/08", description: "AULA DE CANTO 52147", value: "350,00" },
  ];

  return (
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
        <Col xs={12} lg={5} className="mt-lg-5">
          <Tabs defaultActiveKey="lastest" className="mt-5 pt-lg-5">
            <Tab eventKey="lastest" title="Últimos Lançamentos">
              <Table striped borderless>
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Valor (R$)</th>
                  </tr>
                </thead>
                <tbody>
                  {lastestData.map(({ date, description, value }) => (
                    <tr>
                      <td>{date}</td>
                      <td>{description}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="future" title="Lançamentos Futuros">
              <Table striped borderless>
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Valor (R$)</th>
                  </tr>
                </thead>
                <tbody>
                  {futureData.map(({ date, description, value }) => (
                    <tr>
                      <td>{date}</td>
                      <td>{description}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
