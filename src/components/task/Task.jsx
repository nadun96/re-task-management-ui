import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';

const statusColors = {
  pending: {
    color: 'orange', // Example color for pending status
  },
  inProgress: {
    color: 'blue', // Example color for in progress status
  },
  completed: {
    color: 'green', // Example color for completed status
  },
};



function Task({ task }) {
  const [status, setStatus] = useState(task.status);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{task.title}</Card.Title>
        <Card.Text>{task.description}</Card.Text>
        <Form.Group>
          <Form.Label>Status</Form.Label>
          <Form.Control
            as="select"
            value={status}
            onChange={handleStatusChange}
          >
            <option value="PENDING">Pending</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="COMPLETED">Completed</option>
          </Form.Control>
        </Form.Group>
        <Card.Text style={statusColors[status.toLowerCase()]}>{status}</Card.Text>
        <Card.Text>Assigned To: {task.assignedTo.name}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Task;
