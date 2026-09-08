import React, { useState, useEffect, useCallback } from 'react';
import { Container, Spinner, Alert, Navbar, Nav, Table, Badge, Form, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { api } from './services/api';

function App() {
  const [problems, setProblems] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [topic, setTopic] = useState('');
  const [level, setLevel] = useState('');
  const [topics, setTopics] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const params = {};
      if (search) params.search = search;
      if (topic) params.topic = topic;
      if (level) params.level = level;
      
      const [problemsData, statsData] = await Promise.all([
        api.getProblems(params),
        api.getStats()
      ]);
      
      setProblems(problemsData || []);
      setStats(statsData);
      
      if (statsData && statsData.by_topic) {
        setTopics(Object.keys(statsData.by_topic).sort());
      }
      
    } catch (err) {
      setError('Failed to load data. Please make sure the backend is running on http://localhost:8000');
      console.error('Error:', err);
      setProblems([]);
    } finally {
      setLoading(false);
    }
  }, [search, topic, level]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleToggle = async (id) => {
    try {
      await api.toggleProblem(id);
      fetchData();
    } catch (err) {
      console.error('Failed to toggle problem:', err);
      alert('Failed to update problem status. Please try again.');
    }
  };

  const getLevelColor = (level) => {
    switch(level) {
      case 'Easy': return 'success';
      case 'Medium': return 'warning';
      case 'Hard': return 'danger';
      default: return 'secondary';
    }
  };

  const getLeetCodeUrl = (title) => {
    const formattedTitle = title
      .toLowerCase()
      .replace(/\([^)]*\)/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    return `https://leetcode.com/problems/${formattedTitle}`;
  };

  const StatsComponent = ({ stats }) => {
    if (!stats) return null;
    
    return (
      <Row className="mb-4">
        <Col md={3}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <Card.Title>Total Problems</Card.Title>
              <h2 className="text-primary">{stats.total}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center shadow-sm bg-success text-white">
            <Card.Body>
              <Card.Title>Easy</Card.Title>
              <h2>{stats.easy}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center shadow-sm bg-warning">
            <Card.Body>
              <Card.Title>Medium</Card.Title>
              <h2>{stats.medium}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center shadow-sm bg-danger text-white">
            <Card.Body>
              <Card.Title>Hard</Card.Title>
              <h2>{stats.hard}</h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  };

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" variant="primary" style={{ width: '3rem', height: '3rem' }} />
        <p className="mt-3 fs-5">Loading problems...</p>
      </Container>
    );
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand>LeetCode Tracker</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="https://leetcode.com" target="_blank">LeetCode</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="py-3">
        {error && (
          <Alert variant="danger" className="mb-4">
            <Alert.Heading>⚠️ Error</Alert.Heading>
            <p>{error}</p>
            <hr />
            <p className="mb-0">
              Make sure the backend is running: 
              <code className="ms-2">uvicorn app.main:app --reload --port 8000</code>
            </p>
          </Alert>
        )}
        
        {stats && <StatsComponent stats={stats} />}
        
        <div className="bg-light p-3 rounded shadow-sm mb-4">
          <Row>
            <Col md={4}>
              <Form.Control
                type="text"
                placeholder="🔍 Search problems..."
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
                <option value="Easy">🟢 Easy</option>
                <option value="Medium">🟡 Medium</option>
                <option value="Hard">🔴 Hard</option>
              </Form.Select>
            </Col>
          </Row>
        </div>
        
        {problems.length === 0 ? (
          <div className="text-center py-5">
            <h4>No problems found</h4>
            <p className="text-muted">Try adjusting your search filters</p>
          </div>
        ) : (
          <Table striped bordered hover responsive className="shadow-sm">
            <thead className="bg-light">
              <tr>
                <th style={{ width: '60px' }}>#</th>
                <th>Problem</th>
                <th style={{ width: '150px' }}>Topic</th>
                <th style={{ width: '100px' }}>Level</th>
                <th style={{ width: '150px' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {problems.map((problem) => (
                <tr key={problem.id}>
                  <td>{problem.num}</td>
                  <td>
                    <a 
                      href={getLeetCodeUrl(problem.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      {problem.title}
                    </a>
                  </td>
                  <td>
                    <Badge bg="info" className="px-2 py-1">
                      {problem.topic}
                    </Badge>
                  </td>
                  <td>
                    <Badge bg={getLevelColor(problem.level)} className="px-2 py-1">
                      {problem.level}
                    </Badge>
                  </td>
                  <td>
                    <Form.Check
                      type="checkbox"
                      id={`problem-${problem.id}`}
                      checked={problem.completed === 1}
                      onChange={() => handleToggle(problem.id)}
                      label={problem.completed ? "✅ Completed" : "⬜ Pending"}
                      className="fw-bold"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        
        <div className="mt-3 text-muted text-center">
          Showing {problems.length} out of {stats?.total || 0} problems
        </div>
      </Container>
    </>
  );
}

export default App;