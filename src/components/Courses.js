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
      <header className="bg-dark py-5">
        <div className="container px-5">
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-lg-8 col-xl-7 col-xxl-6">
              <div className="my-5 text-center text-xl-start">
                <h1 className="course-header fw-bolder text-white mb-2">
                The Ultimate Guide to Course Deep : Transform Your Knowledge
                </h1>
                <p className="lead fw-normal fs-6 text-white-50 mb-4">
                Elevate your expertise, broaden your horizons, and embark on a transformative learning journey with the ultimate guide to the Deep course.
                </p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                  <a
                    className="btn btn-warning btn-lg px-4 me-sm-3"
                    href="#features"
                  >
                    Get Started
                  </a>
                  <a className="btn btn-outline-light btn-lg px-4" href="#">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
              <img
                className="img-fluid rounded-3 my-5"
                src="https://i.ibb.co/YLFDkgr/course-h.png"
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
                    price,
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
