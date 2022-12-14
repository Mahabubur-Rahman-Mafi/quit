import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";
const RightSide = () => {
  const course = useLoaderData();

  const {
    course_Details,
    image_url,
    title,
  } = course;
  console.log(course);
  return (
    <div className=" manage-courses">
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{course_Details.course}</Card.Text>
          <Link to={`${course._id}`}>
            <Button variant="primary">View More</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RightSide;
