import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import card from "../assets/credit-card.jpg";
import "./infoCard.scss";

const InfoCard = () => (
  <Container className="my-5 card">
    <Row>
      <Col xs={12} lg={7} className="mb-5 mb-lg-0 px-5 px-lg-0">
        <Col xs={12} lg={5}>
          <Row>
            <h2 className="display-4 my-5">Cartão de Crédito</h2>
          </Row>
          <Row>
            <Col xs={12} lg={6} className="mb-4">
              <Row>
                <Col xs={2} className="d-flex justify-content-center">
                  <i class="fa-solid fa-credit-card 2x"></i>
                </Col>
                <Col xs={10} className="h5 text-muted">
                  Credito Pessoal
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={6} className="mb-4">
              <Row>
                <Col xs={2} className="d-flex justify-content-center">
                  <i class="fa-solid fa-mobile 2x"></i>
                </Col>
                <Col xs={10} className="h5 text-muted">
                  App
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={6} className="mb-4">
              <Row>
                <Col xs={2} className="d-flex justify-content-center">
                  <i class="fa-solid fa-cart-shopping 2x"></i>
                </Col>
                <Col xs={10} className="h5 text-muted">
                  Pagamentos Online
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={6} className="mb-4">
              <Row>
                <Col xs={2} className="d-flex justify-content-center">
                  <i class="fa-solid fa-wallet 2x"></i>
                </Col>
                <Col xs={10} className="h5 text-muted">
                  Carteira Digital
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Col>

      <Col xs={12} lg={5}>
        <Image src={card} alt="MagBank Credit Card Example" fluid />
      </Col>
    </Row>
  </Container>
);

export default InfoCard;
