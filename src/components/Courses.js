// import { useContext } from 'react'
// import { Link } from 'react-router-dom'
// import { AuthContext } from '../contexts/UserContext'

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
          <h1 className="text-5xl font-bold text-white pt-6">Hello there</h1>
          <p className=" fontColor " >Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-warning shadow-2xl">Get Started</button>
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
                        return <Card style={{ width: '18rem' }} key={id}>
                        <Card.Img  className="mw-100" variant="top" src={image} />
                        <Card.Body>
                          <Card.Title><Link to={`/course/${id}`}>{name}</Link></Card.Title>
                          <Card.Text>{shortDes.length < 30 ? shortDes : shortDes.slice(0, 60) + "..." }</Card.Text>
                          <div className="d-flex justify-content-between">
                          <Card.Text>{teacher}</Card.Text>
                          <Card.Text className='text-warning'>{price}</Card.Text>
                          </div>
                          <Card.Footer className="d-flex justify-content-between bg-white">
                          <Card.Text className='text-warning'><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/></Card.Text>
                          <Card.Text>{time}</Card.Text>
                          </Card.Footer>
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
