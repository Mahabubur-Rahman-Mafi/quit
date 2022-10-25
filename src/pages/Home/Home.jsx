import Carousel from "react-bootstrap/Carousel";
import image1 from "../../Assest/image-1-min.jpg";
import image2 from "../../Assest/image-2-min.jpg";
import image3 from "../../Assest/image-3-min.jpg";
import image4 from "../../Assest/image-4-min.jpg";
import Accordion from "react-bootstrap/Accordion";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const Home = () => {
  return (
    <div className="container my-4">
      {/* carousel */}
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image4} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      {/* ----- */}

      {/* about-section */}
      <>
        <h2 className="text-center fs-1 mt-5">About</h2>
        <div className="grid">
          <div className="row">
            <div className="col-12 col-lg-6">
              <img
                src={image3}
                className="image-fluid w-100 mt-4 align-items-center"
              ></img>
            </div>
            <div className="col-12 col-lg-6 ">
              <p className="fs-5 mt-4 ">
                <span className="fw-semibold">"Quit"</span> is a e-learning
                website. You can learn
                <span className="fw-semibold"> IT Relative</span> courses free
                or paid. You will learn everything with fun and realtime
                example. <br></br>
                <br></br>
                IT Sector means both software development and the hardware
                involved in the IT industry including everything from computer
                systems, to the design, implementation, study and development of
                IT, IT based management systems, IT based service provider
                through-platform, and IT based Aggregator businesses and
                systems.
              </p>
            </div>
          </div>
        </div>
      </>
      {/* ____ */}

      {/* courses section */}
      <h2 className="text-center fs-1 mt-5">Courses</h2>
      {/* ____ */}
      {/* FAQ section */}
      <div div className="w-75 mx-auto mt-5" id="fqa">
        <h2 className="text-center fs-1 mb-4">FAQ</h2>
        <Accordion defaultActiveKey={["0"]} flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="fs-3 fw-semibold">
              How I will Get Support?
            </Accordion.Header>
            <Accordion.Body className="fs-6">
              We have a wonderful support section. You will get unlimited
              support when ever you want or clear something or anything else.
              just come to our website and click the support section. Then our
              mentor will support or give you direction to solve your problem or
              clear your concept.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="fs-3 fw-semibold">
              Is the classes recorder??
            </Accordion.Header>
            <Accordion.Body className="fs-6">
              There are both program of our courses. You can enrule our any
              courses. Some courses are pre-recorded, some are live. In
              pre-recorded courses you can see or do whenever you want. But The
              time are fixed. SO you have to complete the course in time.
              Otherwise you willnot ger certificate.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className="fs-3 fw-semibold">
              How can I join live course?
            </Accordion.Header>
            <Accordion.Body className="fs-6">
              There are both program of our courses. You can enrule our any
              courses. Some courses are pre-recorded, some are live. You can
              visit our website or follow our facebook page. you will get the
              update about live course one month ago. Our live courses seat is
              only 15.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header className="fs-3 fw-semibold">
              Is there any free courses?
            </Accordion.Header>
            <Accordion.Body className="fs-6">
              Yes!!! just visit our website and then go to courses.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      {/* ____ */}

      {/* get in touch section */}
      <div className="mt-5 mb-5">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} lg={6}>
              <h1 className="text-end  lh-6">
                Send us your <br></br>
                <span className="fw-bold">Thought!!</span>
              </h1>
            </Col>
            <Col xs={12} lg={6}>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3 mt-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingPassword"
                label="Send you thought"
              >
                <Form.Control
                  as="textarea"
                  style={{ height: "100px" }}
                  placeholder="Your message"
                />
              </FloatingLabel>
            </Col>
          </Row>
        </Container>
      </div>
      {/* ____ */}
    </div>
  );
};

export default Home;
