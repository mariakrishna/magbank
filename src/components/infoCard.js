import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import {
  faCreditCard,
  faWallet,
  faShoppingCart,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import card from "../assets/credit-card.jpg";
import "./infoCard.scss";
import IconText from "./IconText";

const InfoCard = () => (
  <Container className="my-5 card">
    <Row>
      <Col xs={12} lg={7} className="mb-5 mb-lg-0 px-5 px-lg-0">
        <Col xs={12}>
          <Row>
            <h2 className="my-5">Cartão de Crédito</h2>
          </Row>
          <Row>
            <Col xs={12} lg={6} className="mb-4">
              <IconText
                icon={faCreditCard}
                size={2}
                color="#f05656"
                textClassName="h5 text-muted"
              >
                Credito Pessoal
              </IconText>
            </Col>

            <Col xs={12} lg={6} className="mb-4">
              <IconText
                icon={faShoppingCart}
                size={2}
                color="#f05656"
                textClassName="h5 text-muted"
              >
                Pagamentos Online
              </IconText>
            </Col>
          </Row>
        </Col>
        <Row>
          <Col xs={12} lg={6} className="mb-4">
            <IconText
              icon={faMobile}
              size={2}
              color="#f05656"
              textClassName="h5 text-muted"
            >
              APP
            </IconText>
          </Col>
          <Col xs={12} lg={6} className="mb-4">
            <IconText
              icon={faWallet}
              size={2}
              color="#f05656"
              textClassName="h5 text-muted"
            >
              Pagamento Digital
            </IconText>
          </Col>
        </Row>
      </Col>
      <Col xs={12} lg={5} className="mb-5 px-5 justify-content-center">
        <Image src={card} alt="MagBank Credit Card Example" fluid />
      </Col>
    </Row>
  </Container>
);

export default InfoCard;
