import React from 'react';
import { Form } from 'react-bootstrap';

const Filter = ({ titleFilter, setTitleFilter, ratingFilter, setRatingFilter }) => {
  return (
    <div style={{ margin: '1rem' }}>
      <Form>
        <Form.Group controlId="formTitleFilter">
          <Form.Label>Filter by Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter movie title"
            value={titleFilter}
            onChange={(e) => setTitleFilter(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formRatingFilter">
          <Form.Label>Filter by Rating</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter minimum rating"
            value={ratingFilter}
            onChange={(e) => setRatingFilter(e.target.value)}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Filter;