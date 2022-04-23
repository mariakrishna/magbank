import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/MAGbank.png";
import applestore from "../assets/cardapplestore.jpg";
import googleplay from "../assets/cardgoogleplay.jpg";
import "./footer.scss";

const Footer = () => (
  <footer className="footer">
    <Container>
      <Row className="text-center py-5">
        <Col xs={12} lg={6} className="text-lg-left">
          <Image src={logo} />
        </Col>
        <Col xs={12} lg={4} className="py-xs-5">
          <Image src={applestore} /> <Image src={googleplay} className="ml-2" />
        </Col>
        <Col
          Col
          xs={12}
          lg={2}
          className="d-flex align-itens-center justify-content-center"
        >
          <FontAwesomeIcon
            icon={faFacebookSquare}
            color="#7c7c7c"
            size="2x"
            className="ml-2"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            color="#7c7c7c"
            size="2x"
            className="ml-2"
          />
          <FontAwesomeIcon
            icon={faYoutube}
            color="#7c7c7c"
            size="2x"
            className="ml-2"
          />
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
