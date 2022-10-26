import React from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./logRes.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";

const Registration = () => {
    const [pass, setPass] = useState('')
    const [error, setError] = useState('')
    const { createUser, googleAuthProvider } = useContext(AuthContext);

    const gogleProvider = new GoogleAuthProvider()

    const handleGoogleButton = () => {
         googleAuthProvider(gogleProvider)
           .then((result) => {
               const user = result.user;
               console.log(user);
           })
           .catch((e) => {});
    }


  const handleForm = (event) => {
      event.preventDefault();
      const form = event.target
      const email = form.email.value
      const name1 = form.name1.value
      const name2 = form.name2.value
      const name = name1 + " "+ name2
      const password =form.password.value
      const repassword = form.repassword.value
      const photoURL = form.photo.value
      if (password === repassword) {
          createUser(email, password)
            .then((result) => {
              const user = result.user;
                console.log(user);
                setPass('')
                setError('')
                form.reset()
            })
              .catch((e) => {
                const msg = e.message;
              setError(msg)
            });
      }
      else {
          setPass('Password do not match...')
      }
     
      
  };
  return (
    <div>
      <div className="w-50 mx-auto login-design my-5">
        <h1 className="text-center mb-4">Welcome!</h1>
        <Form onSubmit={handleForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  name="name1"
                  placeholder="First name"
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  name="name2"
                  placeholder="Last name"
                />
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
              name="repassword"
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
          <p className="text-danger">{pass}</p>
          <Button
            variant="outline-primary"
            type="submit"
            className="mb-3 px-4 mt-2"
          >
            Register
          </Button>
          <p>
            Already, Have an account? <Link to="/login">Log in</Link>
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
                  <FaGoogle></FaGoogle> SignUp with Google
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
                  <FaGithub></FaGithub> SignUp with GitHub
                </Button>
              </Link>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Registration;
