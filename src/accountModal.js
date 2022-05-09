import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import "./accountModal.scss";

const AccountModal = ({ show, handleClose, auth }) => {
  const navigate = useNavigate();
  const [name, setName] = useState();

  const handleSubmit = () => {
    auth.login(name, Math.random, navigate("/dashboard"));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="modal_title">Abra sua Conta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label className="text-center">Seu nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-center">Seu Email</Form.Label>
            <Form.Control type="email" placeholder="Seu email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCity">
            <Form.Label className="text-center">Sua Cidade</Form.Label>
            <Form.Control as="select">
              <option>Escolha sua Cidade</option>
              <option value="1">Florianópolis -SC</option>
              <option value="2">Curitiba - PR</option>
              <option value="3">São Paulo - SP</option>
              <option value="3">Rio de Janeiro - RJ</option>
            </Form.Control>
          </Form.Group>
          <Form.Check
            type="checkbox"
            id="custom-checkbox"
            label="Eu li e concordo com os termos de uso"
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button className="button_color" onClick={handleSubmit}>
          Criar Conta
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AccountModal;
