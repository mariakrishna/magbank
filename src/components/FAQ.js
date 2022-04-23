import React, { useState, useEffect } from "react";
import { Col, Container, Row, Accordion } from "react-bootstrap";
import IconText from "./IconText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faWallet,
  faShieldAlt,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import "./FAQ.scss";

const Faq = () => {
  const options = [
    { icon: faCreditCard, text: "Cartão de crédito" },
    { icon: faWallet, text: "Conta e abertura" },
    { icon: faShieldAlt, text: "Token digital" },
    { icon: faUserTie, text: "Produtos e Serviços" },
  ];

  const [index, setIndex] = useState(0);

  const handleClick = (key) => {
    console.log(key);
    setIndex(key);
  };

  useEffect(() => {
    console.log(index);
  }, [index]);

  return (
    <section className="faq">
      <Container className="py-5">
        <h3 className="faq__title">Dúvidas Frequentes</h3>
        <Row className="d-flex align-itens-center justify-content-center">
          <Col xs={12} className="d-lg-none mb-2">
            <Row>
              {options.map(({ icon }, key) => (
                <Col className="m-3" key={key}>
                  <FontAwesomeIcon
                    icon={icon}
                    sixe="2x"
                    color={key === index ? "#fff" : "#BBB"}
                    onClick={() => handleClick(key)}
                  />
                </Col>
              ))}
            </Row>
            <Row className="justify-content-center mt-3">
              <p className="lead">{options[index].text}</p>
            </Row>
          </Col>

          <Row>
            <Col xs={12} lg={5} className="d-none d-lg-block">
              <section className="mb-3 pb-4">
                <Col className="mb-3" textClassName="lead">
                  {options.map(({ icon, text }, key) => (
                    <IconText
                      icon={icon}
                      size={3}
                      className="faq-clickable mb-3"
                      textClassName="lead"
                      color={key === index ? "#fff" : "#BBB"}
                      onClick={() => handleClick(key)}
                      key={key}
                    >
                      {text}
                    </IconText>
                  ))}
                </Col>
              </section>
            </Col>
            <Col xs={12} lg={7}>
              <Accordion defaultActiveKey="0" activeKey={`${index}`}>
                <Accordion.Item className="faq__card" eventKey="0">
                  <Accordion.Header>
                    Lorem ipsum dolor sit amet
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="faq__card" eventKey="1">
                  <Accordion.Header>Sed auctor tempus nulla</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="faq__card" eventKey="2">
                  <Accordion.Header>Duis id turpis orci.</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="faq__card" eventKey="3">
                  <Accordion.Header>
                    Curabitur volutpat fringilla odio, vitae molestie turpis.
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Row>
      </Container>
    </section>
  );
};

export default Faq;
