import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import LeftSideBar from './LeftSideBar';

const Course = () => {
    const singleCourse = useLoaderData();
    const { id, name, image, description,price,ratings,shortDes,teacher,time } = singleCourse;
    return (
        <div className="p-5">
            <Container>
        <Row className="justify-content-lg-center gap-3">
        <Col xs lg="3" className="" >
            <LeftSideBar></LeftSideBar>
          </Col>
          <Col lg= "7" >
            <h1>{name}</h1>            
                <div className="d-flex justify-content-between">
                    <h3>{price}</h3>
                    <button><Link>Get Premium</Link></button>
                </div>
            <div className="text-center" ><img src={image} /></div>
            <div className="d-flex justify-content-between">
                    <h5>Mentor : {teacher}</h5>
                    <h5>Ratings : {ratings}</h5>
                </div>
            <div><h5>You Can Learn : </h5>{shortDes}</div>
            <div><h5>Description : </h5>{description}</div>
            <button><Link>Download PDF</Link></button>
          </Col>
          
        </Row>
      </Container>
        </div>
    );
};

export default Course;