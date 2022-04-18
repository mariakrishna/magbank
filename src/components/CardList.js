import React from "react";
import { Row, Col, Button, Container, Card } from "react-bootstrap";

const CardList = ({ post }) => {
  <Container>
    <Row>
      {post &&
        post.map(({ id, image, title, excerpt, action }) => (
          <Col xs={12} lg={4} key={id}>
            <Card className="mx-auto my-3">
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{excerpt}</Card.Text>
                <Button variant="danger">{action}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </Row>
  </Container>;
};

export default CardList;
