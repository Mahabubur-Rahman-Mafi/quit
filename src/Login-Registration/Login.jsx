import React from 'react';
import { Form } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import './logRes.css'
import { Link } from 'react-router-dom';

const Login = () => {
  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
   
    const password = form.password.value;
   
    console.log(email, password, );
  };

    return (
      <div className="w-50 mx-auto login-design my-5">
        <h1 className="text-center mb-4">Log in</h1>
        <Form onSubmit={handleForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" />
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