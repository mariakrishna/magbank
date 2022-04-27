import React from "react";
import { Col, Table } from "react-bootstrap";

const AccountHistory = ({ data }) => {
  const { history } = data;

  return (
    <Col xs={12} lg={8}>
      <Table>
        {history.map((entry) => (
          <h2>{entry}</h2>
        ))}
      </Table>
    </Col>
  );
};

export default AccountHistory;
