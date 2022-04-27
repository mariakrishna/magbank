import React from "react";
import { Button, Col, Tabs, Tab, Form } from "react-bootstrap";

const AccountPayments = () => (
  <>
    <Col xs={12} lg={8} className="mt-lg-5">
      <h3 className="my-5">Pagamentos</h3>
      <Tabs defaultActiveKey="boleto" className="mt-5 pt-lg-5">
        <Tab eventKey="boleto" title="Boleto"></Tab>
        <Tab eventKey="transfer" title="Transferência"></Tab>
        <Form>
          <Form.Group controlId="formBarCode">
            <Form.Label>Código de Barras</Form.Label>
            <Form.Control
              type="number"
              placeholder="Insira o código de barras"
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="formPaymentType" key="inline-radio">
            <Form.Label>Forma de Pagamento</Form.Label>
            <Form.Check
              type="radio"
              id="inline-radio"
              label="Débito em conta corrente"
            />
            <Form.Check
              type="radio"
              id="inline-radio"
              label="Cartão de Crédito"
            />
          </Form.Group>
          <Button variant="success">Continuar</Button>
        </Form>
      </Tabs>
    </Col>
  </>
);

export default AccountPayments;
