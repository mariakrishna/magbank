import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  faMobileAlt,
  faMobile,
  faGlobe,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import IconText from "./IconText";
import "./institutional.scss";

const Institutional = ({ onClick }) => (
  <div className="institutional text-light py-5">
    <Container className="ps-5">
      <Row>
        <Col xs={12} lg={5}></Col>
        <Col xs={12} lg={7}>
          <h3>Já Nascemos digital</h3>

          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            luctus, lectus in dignissim bibendum, neque nisi suscipit erat, id
            tristique sem libero at sem. In imperdiet mi a viverra condimentum.
            Donec ullamcorper eleifend tincidunt. Integer vitae vehicula justo.
            Curabitur posuere metus at tristique hendrerit. In sollicitudin in
            est eu accumsan. Duis commodo molestie vestibulum. Sed non luctus
            nisl.
          </p>
          <div className="mb-3 pb-4">
            <IconText icon={faMobileAlt} color="#fff" className="mb-2">
              Sem fila e sem burocracira
            </IconText>
            <IconText icon={faMobile} color="#fff" className="mb-2">
              Simples e Prático
            </IconText>
            <IconText icon={faGlobe} color="#fff" className="mb-2">
              Abertura de Conta 100% Online
            </IconText>
            <IconText icon={faShieldAlt} color="#fff" className="mb-2">
              Transações Mais Seguras
            </IconText>
          </div>

          <Button variant="outline-light" onClick={onClick}>
            Abra sua Conta!
          </Button>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Institutional;
