import React from 'react'
import Task from './Task'
import { Container, Row, Col } from 'react-bootstrap'

export default function TaskList() {
  const taskData = {
    id: 1,
    title: "Sample Task",
    description: "This is a sample task",
    status: "PENDING",
    assignedTo: {
      id: 1,
      name: "John Doe"
    }
  };

  return (
    <Container>
      <h1 className="mt-5 mb-3">Task List</h1>
      <Row>
        <Col md={6}>
          <Task task={taskData} />
        </Col>
      </Row>
    </Container>
  );
}