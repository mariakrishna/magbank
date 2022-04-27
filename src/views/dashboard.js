import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import "./dashboard.scss";

import AccountBalance from "../components/accountBalance";
import AccountPayments from "../components/accountPayments";
import AccoutHistory from "../components/accountHistory";

import { Link, Route, Routes } from "react-router-dom";

const Dashboard = ({ className = false }) => {
  const [activeLink, setActiveLink] = useState(0);

  const links = [
    { text: "Minha Conta", path: "/dashboard", exact: true },
    { text: "Pagamentos", path: "/dashboard/payments" },
    { text: "Extrato", path: "/dashboard/history" },
  ];

  const data = {
    latestData: [
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

    history: ["histórico 1", "histórico 2"],
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
            {links.map(({ text, path, exact }, key = { key }) => (
              <Link to={path} exact={exact ? exact : false}>
                <Button
                  className={`dashboard__button text-left ${
                    key === activeLink ? "dashboard__button--active" : ""
                  }`}
                  variant="link"
                  size="lg"
                  block
                  onClick={() => setActiveLink(key)}
                >
                  {text}
                </Button>
              </Link>
            ))}
          </Row>
        </Col>
        <Routes>
          <Route path="" element={<AccountBalance data={data} />} />
          <Route path="" element={<AccountPayments data={data} />} />
          <Route path="" element={<AccoutHistory data={data} />} />
        </Routes>
      </Row>
    </Container>
  );
};

export default Dashboard;
