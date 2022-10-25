import Carousel from "react-bootstrap/Carousel";
import image1 from '../../Assest/image-1-min.jpg'
import image2 from '../../Assest/image-2-min.jpg'
import image3 from '../../Assest/image-3-min.jpg'
import image4 from '../../Assest/image-4-min.jpg'
import Accordion from "react-bootstrap/Accordion";

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
      {/* ____ */}
      {/* FAQ section */}
      <div div className="w-75 mx-auto mt-5">
        <h2 className="text-center fs-1 mb-4">FAQ</h2>
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>How I Get Support?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      {/* ____ */}
      {/* courses section */}
      {/* ____ */}
    </div>
  );
};

export default Home;
