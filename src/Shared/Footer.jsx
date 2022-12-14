import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare} from "react-icons/fa";

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
            <a
              href="https://www.facebook.com/mafi.theboss"
              target="_blank"
              className="footer-icon-color"
              rel="noreferrer"
            >
              <FaFacebookSquare className="fs-2 footer-clicked-icon me-2"></FaFacebookSquare>
            </a>
            <a
              href="https://www.linkedin.com/in/mrmafi/"
              target="_blank"
              className="footer-icon-color"
              rel="noreferrer"
            >
              <FaLinkedin className="fs-2 footer-clicked-icon me-2"></FaLinkedin>
            </a>
            <a
              href="https://www.instagram.com/m_r_mafi"
              target="_blank"
              className="footer-icon-color"
              rel="noreferrer"
            >
              <FaInstagramSquare className="fs-2 footer-clicked-icon"></FaInstagramSquare>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
