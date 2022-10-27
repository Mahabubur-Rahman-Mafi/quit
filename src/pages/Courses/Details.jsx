import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const course = useLoaderData()

    const {
      course_Details,
      details,
      duration,
      image_url,
      instructor,
      others_info,
      rating,
      title,
      total_Student,
    } = course;
    console.log(course);
    return (
      <div className="p-2 manage-courses">
        <h1 className="mb-4">{title}</h1>
        <Image src={image_url} style={{ width: "100%" }}></Image>
        <h3 className="mt-4 mb-3">Course Details</h3>
        <p>{details}</p>
        {/* carefull -section */}
        <h4>Course Outline</h4>
        <p className="mt-3 mb-2">
          <span className="fw-bold"> Assignment</span> :{" "}
          {course_Details.assignment}
        </p>
        <p className=" mb-2">
          <span className="fw-bold"> Quiz</span> : {course_Details.quiz}
        </p>
        <p>
          <span className="fw-bold text-danger"> Careful </span> :{" "}
          {course_Details.carefull}
        </p>
        <Row className="align-items-center mt-4 text-center">
          <Col sm={4}>
            <div className="">
              <h1 className="mb-0 text-success">{total_Student}+</h1>
              <p className="fw-semibold">Students</p>
            </div>
          </Col>
          <Col sm={4}>
            <h6 className="mb-0">Duration</h6>
            <p className="text-danger">{duration} months</p>
          </Col>
          <Col sm={4}>
            <p className="mb-0">
              <FaStar className="mb-0"></FaStar> {rating.number}
            </p>
            <p> {rating.badge}</p>
          </Col>
        </Row>

        {/* Course Instructor */}
        <div className="text-center mt-3">
          <Image
            roundedCircle
            style={{ width: "10%" }}
            src={instructor.img}
          ></Image>
          <h5 className="mt-2 mb-2">{instructor.name}</h5>
          <p className="">{instructor?.about}</p>
        </div>
        <Row className='mt-4'>
          <Col sm={6}>
            <Link to="/enroll">
              <Button variant="outline-success" className="w-100 fw-semibold py-2">
                Get premium access
              </Button>
            </Link>
          </Col>
          <Col sm={6}>
              <Button variant="outline-info" className="w-100 fw-semibold py-2">
                View Details
              </Button>
          </Col>
        </Row>
      </div>
    );};

export default Details;