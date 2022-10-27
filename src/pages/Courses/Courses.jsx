import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet, useLoaderData } from "react-router-dom";
import LeftSide from "./LeftSide";

const Courses = () => {

    const courses = useLoaderData();
    console.log(courses);
  return (
    <div>
      <Container className="my-5">
        <Row>
          <Col xs={12} md={5} lg={4}>
            {courses.map((course) => (
              <LeftSide key={course._id} course={course}></LeftSide>
            ))}
          </Col>
          <Col xs={12} md={7} lg={8}>
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
