import React, { useState } from 'react';
import { Table, Badge, Form } from 'react-bootstrap';

const ProblemTable = ({ problems, onToggle }) => {
  const getLevelColor = (level) => {
    switch(level) {
      case 'Easy': return 'success';
      case 'Medium': return 'warning';
      case 'Hard': return 'danger';
      default: return 'secondary';
    }
  };

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Problem</th>
          <th>Topic</th>
          <th>Level</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {problems.map((problem) => (
          <tr key={problem.id}>
            <td>{problem.num}</td>
            <td>
              <a 
                href={`https://leetcode.com/problems/${problem.title.toLowerCase().replace(/ /g, '-')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {problem.title}
              </a>
            </td>
            <td>
              <Badge bg="info">{problem.topic}</Badge>
            </td>
            <td>
              <Badge bg={getLevelColor(problem.level)}>
                {problem.level}
              </Badge>
            </td>
            <td>
              <Form.Check
                type="checkbox"
                checked={problem.completed === 1}
                onChange={() => onToggle(problem.id)}
                label={problem.completed ? "✓ Completed" : "Pending"}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProblemTable;