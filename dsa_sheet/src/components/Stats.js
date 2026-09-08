import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Stats = ({ stats }) => {
  if (!stats) return null;
  
  return (
    <div className="stats-container mb-4">
      <Row>
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Total</Card.Title>
              <h2>{stats.total}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center bg-success text-white">
            <Card.Body>
              <Card.Title>Easy</Card.Title>
              <h2>{stats.easy}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center bg-warning">
            <Card.Body>
              <Card.Title>Medium</Card.Title>
              <h2>{stats.medium}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center bg-danger text-white">
            <Card.Body>
              <Card.Title>Hard</Card.Title>
              <h2>{stats.hard}</h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Stats;