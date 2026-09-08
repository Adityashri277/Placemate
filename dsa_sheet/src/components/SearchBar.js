import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const SearchBar = ({ search, setSearch, topic, setTopic, level, setLevel, topics }) => {
  return (
    <Form className="mb-4">
      <Row>
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="Search problems..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>
        <Col md={3}>
          <Form.Select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          >
            <option value="">All Topics</option>
            {topics.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </Form.Select>
        </Col>
        <Col md={3}>
          <Form.Select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option value="">All Levels</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </Form.Select>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBar;