import { useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import RightSideBar from "../layer/RightSideBar";
import { AuthContext } from "../layer/UserContext";
import { BsStarFill, BsStarHalf} from "react-icons/bs";

const Courses = () => {
  const courseData = useLoaderData();

  const { user } = useContext(AuthContext)
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center headerBG" >
        <div className="max-w-md vw-100 mx-auto p-5 ">
          <h1 className="text-5xl font-bold text-white pt-6">Learn Without Limit</h1>
          <p className=" fontColor w-50 w-sm-100  mx-auto " >Start, switch, or advance your career with more than 5,200 courses, Professional Certificates, and degrees from world-class Web Skilled Courses.</p>
          <button className="btn btn-warning shadow-2xl"><Link className="text-decoration-none text-white" to='/register'>JOIN FOR FREE</Link></button>
        </div>
      </div>
      <Container >
        <Row className="justify-content-lg-center">
          <Col lg= "auto"  >
            {/* Single courses */}
            <section className="my-5 mx-auto">
                {
                  courseData.map((course) => {
                        const { id, name, image, description,price,ratings,shortDes,teacher,time } = course;
                        return <Card className="mx-auto" style={{ width: '18rem' }} key={id}>
                        <Card.Img  className="mw-100" variant="top" src={image} />
                        <Card.Body>
                          <Card.Title><Link className="text-decoration-none" to={`/course/${id}`}>{name}</Link></Card.Title>
                          <Card.Text>{shortDes.length < 30 ? shortDes : shortDes.slice(0, 60) + "..." }</Card.Text>
                          <div className="d-flex justify-content-between">
                          <Card.Text>{teacher}</Card.Text>
                          <Card.Text className='text-warning'>{price}</Card.Text>
                          </div>
                          <Card.Footer className="d-flex justify-content-between bg-white">
                          <Card.Text className='text-dark'><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/></Card.Text>
                          <Card.Text>{time}</Card.Text>
                          </Card.Footer>
                          <Card.Text className="text-center">
                          <button className="btn btn-warning shadow-2xl w-100 p-2 "><Link className="text-decoration-none text-white" to={`/course/${id}`}>SEE DETAILS</Link></button>
                          </Card.Text>
                        </Card.Body>

                      </Card>
                    })
                }
            </section>

          </Col>
          <Col xs lg="2" className="py-5" >
            <RightSideBar></RightSideBar>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Courses;
