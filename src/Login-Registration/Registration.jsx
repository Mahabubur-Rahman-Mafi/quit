import React from "react";
import { Form } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import "./logRes.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const Registration = () => {
  const handleswith = (event) => {
    console.log(event.target.chcked);
  };
  return (
    <div>
      <div className="w-50 mx-auto login-design my-5">
        <h1 className="text-center mb-4">Welcome!</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="First name"
                />
              </Col>
              <Col>
                <Form.Control type="text" name="name" placeholder="Last name" />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label> Re-enter Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo Url</Form.Label>
            <Form.Control name="photo" type="text" placeholder="your url" />
          </Form.Group>
          <Button variant="outline-primary" type="submit" className="mb-3 px-4 mt-2">
            Register
          </Button>
          <p>
            Already, Have an account? <Link to="/login">Log in</Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Registration;
