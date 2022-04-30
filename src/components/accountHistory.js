import React from "react";
import { Col, Table } from "react-bootstrap";

const AccountHistory = ({ data }) => {
  const { history } = data;

  return (
    <Col xs={12} lg={8}>
      <Table striped borderless>
        <thead>
          <tr>
            <th>Data</th>
            <th>Descrição</th>
            <th>Valor (R$)</th>
            <th>Saldo (R$)</th>
          </tr>
        </thead>
        <tbody>
          {history.map(({ date, description, value, saldo }) => (
            <tr>
              <td>{date}</td>
              <td>{description}</td>
              <td>{value}</td>
              <td>{saldo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Col>
  );
};

export default AccountHistory;
