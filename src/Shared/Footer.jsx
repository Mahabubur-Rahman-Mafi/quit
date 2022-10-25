import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Container>
        <Row className="text-center align-items-center">
          <Col xs={12} lg={3}>
            <h1 className="fw-bold">!quit</h1>
            <p className="fw-semibold">
              !quit is a e-learning site. <br></br>where you can learn any with{" "}
              <br></br>fun and realistic way
            </p>
          </Col>
          <Col xs={12} lg={6}>
            <p className="mx-auto fs-6">
              Idea and Develop by{" "}
              <a
                href="https://www.linkedin.com/in/mrmafi/"
                target="_blank"
                className="footer-my-name"
                rel="noreferrer"
              >
                <span className="fw-semibold">Mahbubur Rahman</span>
              </a>
            </p>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <FaFacebookSquare className="fs-2 me-2"></FaFacebookSquare>
            <FaLinkedin className="fs-2 me-2"></FaLinkedin>
            <FaInstagramSquare className="fs-2"></FaInstagramSquare>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
