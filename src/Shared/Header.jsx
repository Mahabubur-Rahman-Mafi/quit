import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logo from "../Assest/logo.png";
import "./Shared.css";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { FaUser } from "react-icons/fa";
import { Form, Image } from "react-bootstrap";
import { useState } from "react";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [dark, setDark] = useState(false)

  const handleLogOut = () => {
    logOutUser()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const hangledisplayName = () => {
    <p>Hello</p>;
  };

  const handleDark = (event) => {
    const dark = event.target.checked
    setDark(dark);

    if (dark) {
      document.body.classList.add('dark')
    }
    else {
      document.body.classList.remove("dark");
    }
  }
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      bg="transparent"
      className="mt-2"
    >
      <Container>
        <NavLink to="/">
          <img
            src={logo}
            width="120"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto header-menu-item">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            
          </Nav>
          <Nav>
            <Form onClick={handleDark} className="text-center">
              <Form.Check type="switch" name="switch" id="custom-switch" />
              {!dark ? <p>Light Mode</p> : <p>Dark Mode</p>}
            </Form>

            {user?.uid ? (
              <>
                <div onMouseOver={hangledisplayName}>
                  {user?.photoURL ? (
                    <Image
                      src={user.photoURL}
                      roundedCircle
                      alt=""
                      className="user-image-profile ms-3"
                    ></Image>
                  ) : (
                    <FaUser></FaUser>
                  )}
                </div>
                <Link to="/">
                  <Button
                    variant="outline-primary"
                    className="ms-3"
                    onClick={handleLogOut}
                  >
                    LogOut
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline-primary" className="ms-3">
                    LogIn
                  </Button>
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
