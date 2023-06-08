import { useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import RightSideBar from "../layer/RightSideBar";
import { AuthContext } from "../layer/UserContext";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const Courses = () => {
  const courseData = useLoaderData();

  const { user } = useContext(AuthContext);
  return (
    <div>
      <header class="bg-dark py-5">
        <div class="container px-5">
          <div class="row gx-5 align-items-center justify-content-center">
            <div class="col-lg-8 col-xl-7 col-xxl-6">
              <div class="my-5 text-center text-xl-start">
                <h1 class="course-header fw-bolder text-white mb-2">
                  A Bootstrap 5 template for modern businesses
                </h1>
                <p class="lead fw-normal text-white-50 mb-4">
                  Quickly design and customize responsive mobile-first sites
                  with Bootstrap, the world’s most popular front-end open source
                  toolkit!
                </p>
                <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                  <a
                    class="btn btn-primary btn-lg px-4 me-sm-3"
                    href="#features"
                  >
                    Get Started
                  </a>
                  <a class="btn btn-outline-light btn-lg px-4" href="#!">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
              <img
                class="img-fluid rounded-3 my-5"
                src="https://dummyimage.com/600x400/343a40/6c757d"
                alt="..."
              />
            </div>
          </div>
        </div>
      </header>
      <div className="hero min-h-screen bg-base-200">
        <Container>
          <Row className="justify-content-lg-center">
            <Col lg="auto">
              {/* Single courses */}
              <section className="my-5 mx-auto">
                {courseData.map((course) => {
                  const {
                    id,
                    name,
                    image,
                    description,
                    price,
                    ratings,
                    shortDes,
                    teacher,
                    time,
                  } = course;
                  return (
                    <Card
                      className="mx-auto"
                      style={{ width: "18rem" }}
                      key={id}
                    >
                      <Card.Img className="mw-100" variant="top" src={image} />
                      <Card.Body>
                        <Card.Title>
                          <Link
                            className="text-decoration-none"
                            to={`/course/${id}`}
                          >
                            {name}
                          </Link>
                        </Card.Title>
                        <Card.Text>
                          {shortDes.length < 30
                            ? shortDes
                            : shortDes.slice(0, 60) + "..."}
                        </Card.Text>
                        <div className="d-flex justify-content-between">
                          <Card.Text>{teacher}</Card.Text>
                          <Card.Text className="text-warning">
                            {price}
                          </Card.Text>
                        </div>
                        <Card.Footer className="d-flex justify-content-between bg-white">
                          <Card.Text className="text-dark">
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarHalf />
                          </Card.Text>
                          <Card.Text>{time}</Card.Text>
                        </Card.Footer>
                        <Card.Text className="text-center">
                          <button className="btn btn-warning shadow-2xl w-100 p-2 ">
                            <Link
                              className="text-decoration-none text-white"
                              to={`/course/${id}`}
                            >
                              SEE DETAILS
                            </Link>
                          </button>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  );
                })}
              </section>
            </Col>
            <Col xs lg="2" className="py-5">
              <RightSideBar></RightSideBar>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Courses;
