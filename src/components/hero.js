import React from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
import logo from "../assets/logo__magic-pay--mobile.png";
import logoDesktop from "../assets/logo__magic-pay.png";
import "./hero.scss";

const Hero = ({ onClick }) => (
  <div className="jumbotron text-light hero">
    <div className="text-center">
      <Row className="my-lg-5">
        <Col lg className="text-lg-right my-lg-5">
          <Image className="d-lg-none" src={logo} />
          <Image className="d-none d-lg-inline-block" src={logoDesktop} />
        </Col>
        <Col lg className4="text-lg-left my-lg-5">
          <p>Pague suas contas pelo nosso app!</p>
          <Button variant="outline-light" onClick={onClick}>
            Abra sua conta
          </Button>
        </Col>
      </Row>
    </div>
  </div>
);

export default Hero;
