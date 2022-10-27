import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import './logRes.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { useState } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

  const { userLogIn, googleAuthProvider } = useContext(AuthContext);


  const [error, setError] = useState('')
  const nevigate = useNavigate()
  const location = useLocation()
  const gogleProvider = new GoogleAuthProvider();

  const from = location.state?.from?.pathname || '/'
  


  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogIn(email, password)
      .then(result => {
        const user = result.user
        setError('')
        form.reset()
        nevigate(from,{replace:true})
      })
      .catch(error => {
        const msg = error.message;
        setError(msg)
        
      })

  };

   const handleGoogleButton = () => {
     googleAuthProvider(gogleProvider)
       .then((result) => {
         const user = result.user;
         console.log(user);
       })
       .catch((e) => {});
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
          <p className="text-danger">{error}</p>
          <Button
            variant="outline-primary"
            type="submit"
            className="mb-3 px-4 mt-2"
          >
            Log In
          </Button>
          <p>
            Don't Have an account? <Link to="/register">Register Here</Link>
          </p>

          <hr></hr>
          <Row>
            <Col>
              <Link>
                <Button
                  variant="outline-success"
                  type="submit"
                  className="mb-2 fs-5 fw-semibold mt-2 w-100"
                  onClick={handleGoogleButton}
                >
                  <FaGoogle className="mb-0"></FaGoogle> Go with Google
                </Button>
              </Link>
            </Col>
            <Col>
              <Link>
                <Button
                  variant="outline-dark"
                  type="submit"
                  className="mb-2 fs-5 fw-semibold mt-2 w-100"
                >
                  <FaGithub className="mb-0"></FaGithub> Login with GitHub
                </Button>
              </Link>
            </Col>
          </Row>
        </Form>
      </div>
    );
};

export default Login;