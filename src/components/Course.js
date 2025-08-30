import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router';
import LeftSideBar from './LeftSideBar';
import jsPDF from 'jspdf';


const Course = () => {
    const singleCourse = useLoaderData();
    const { id, name, image, description, price, ratings, shortDes, teacher, time } = singleCourse;

    const pdfGenerate = () => {
        const doc = new jsPDF('landscape', 'px', 'a4', 'false');
        doc.text(20, 30, `${name}`);
        doc.addImage(`${image}`, 20, 40);

        const splitTitle = doc.splitTextToSize(`${shortDes}`, 500);
        doc.text(splitTitle, 20, 300);

        const splitDesc = doc.splitTextToSize(`${description}`, 600);
        doc.setFontSize(13);
        doc.text(splitDesc, 20, 340);

        doc.save("a.pdf");

    }
    return (
        <div className="p-5">
            <Container>
                <Row className="justify-content-lg-center gap-3">
                    <Col xs lg="3" className="" >
                        <LeftSideBar></LeftSideBar>
                    </Col>
                    <Col lg="7" >
                        <h1>{name}</h1>
                        <div className="d-flex justify-content-between">
                            <h3 className="text-warning">{price}</h3>
                            <Link className="btn btn-dark" to="/checkout">Get Premium</Link>
                        </div>
                        <hr></hr>
                        <div className="text-center" ><img src={image} /></div>

                        <div className="d-flex justify-content-between mt-2">
                            <h6>Mentor : <span className="text-warning">{teacher}</span></h6>
                            <h6>Ratings : <span className="text-warning">{ratings}</span></h6>
                        </div>
                        <hr></hr>
                        <div><h5>You Can Learn : </h5>{shortDes}</div>
                        <div><h5>Description : </h5>{description}</div>
                        <Button className="mt-4 btn-warning" onClick={pdfGenerate}>Download PDF</Button>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Course;