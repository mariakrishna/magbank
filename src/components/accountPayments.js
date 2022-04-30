import React from "react";
import { Button, Col, Tabs, Tab, Form, Row } from "react-bootstrap";
import "./accountPayments.scss";

const AccountPayments = () => (
  <>
    <Col xs={12} lg={8} className="mt-lg-5">
      <h3 className="mt-4 mb-3">Pagamentos</h3>
      <Tabs defaultActiveKey="boleto" className="mt-4 pt-lg-4">
        <Tab eventKey="boleto" title="Boleto">
          <Form>
            <Form.Group controlId="formBarCode" className="my-5">
              <Form.Label>Código de Barras</Form.Label>
              <Form.Control
                type="number"
                placeholder="Insira o código de barras"
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="formPaymentType">
              <Form.Label>Forma de Pagamento</Form.Label>
              <div className="d-flex pb-5">
                <Form.Check
                  type="radio"
                  id="debit"
                  label="Débito em conta corrente"
                  name="paymentType"
                />
                <Form.Check
                  type="radio"
                  id="credit"
                  label="Cartão de Crédito"
                  name="paymentType"
                />
              </div>
            </Form.Group>
            <Button variant="success">Continuar</Button>
          </Form>
        </Tab>
        <Tab eventKey="transfer" title="Transferência">
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState" className="my-3">
                <Form.Label>Banco</Form.Label>
                <Form.Select defaultValue="Selecione">
                  <option>Selecione</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridAgency" className="my-3">
                <Form.Label>Agência</Form.Label>
                <Form.Control type="number" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCC" className="my-3">
                <Form.Label>Conta Corrente</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} controlId="formGridTranferValue">
                <Form.Label>Valor da Transferência</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridHistoryId">
                <Form.Label>Identificação nos extratos</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>

            <Button variant="success" type="submit" className="my-5">
              Continuar
            </Button>
          </Form>
        </Tab>
      </Tabs>
    </Col>
  </>
);

export default AccountPayments;
