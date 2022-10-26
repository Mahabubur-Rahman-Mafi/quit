import React from 'react';
import { Form } from 'react-bootstrap';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import './logRes.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
      <div className="w-50 mx-auto login-design my-5">
        <h1 className="text-center mb-4">Log in</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Button
            variant="outline-primary"
            type="submit"
            className="mb-3 px-4 mt-2"
          >
            Submit
          </Button>
          <p>
            Don't Have an account? <Link to="/register">Register Here</Link>
          </p>
        </Form>
      </div>
    );
};

export default Login;