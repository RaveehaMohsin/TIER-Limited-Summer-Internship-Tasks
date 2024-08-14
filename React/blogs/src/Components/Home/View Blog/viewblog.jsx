import React from 'react';
import Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';

export default function Viewblog({ title, authorname, imageurl, blogcontent, Id }) {
  const history = useHistory();

  const handleImageClick = () => {
    history.push(`/blog/${Id}`);
  };

  return (
    <div style={{ width: '30%', margin: '1%', height: '400px' }}>
      <Card style={{ height: '100%' }}>
        <Card.Img
          variant="top"
          src={imageurl}
          style={{ height: '200px', objectFit: 'cover' }}
          onClick={handleImageClick}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{blogcontent}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Published By: {authorname}</small>
        </Card.Footer>
      </Card>
    </div>
  );
}
