import React from 'react';
import { Card } from 'react-bootstrap';
import { BsBook, BsStopwatch } from 'react-icons/bs';

const LeftSideBar = () => {
    return (
        <div>
            <h3> Course Features </h3>
            <Card>
            <Card.Footer className="d-flex justify-content-between">
                <Card.Text><BsBook/> Lectures</Card.Text>
                <Card.Text>8</Card.Text>
            </Card.Footer>
            <Card.Footer className="d-flex justify-content-between">
                <Card.Text><BsStopwatch/> Duration</Card.Text>
                <Card.Text>4 hours</Card.Text>
            </Card.Footer>
            <Card.Footer className="d-flex justify-content-between">
                <Card.Text><BsStopwatch/> Quizzes</Card.Text>
                <Card.Text>0</Card.Text>
            </Card.Footer>
            <Card.Footer className="d-flex justify-content-between">
                <Card.Text><BsStopwatch/>  Skill level</Card.Text>
                <Card.Text>All levels</Card.Text>
            </Card.Footer>
            <Card.Footer className="d-flex justify-content-between">
                <Card.Text><BsStopwatch/>  Language</Card.Text>
                <Card.Text>English</Card.Text>
            </Card.Footer>
            <Card.Footer className="d-flex justify-content-between">
                <Card.Text><BsStopwatch/> Students</Card.Text>
                <Card.Text>40</Card.Text>
            </Card.Footer>
            <Card.Footer className="d-flex justify-content-between">
                <Card.Text><BsStopwatch/> Certificate</Card.Text>
                <Card.Text>Yes</Card.Text>
            </Card.Footer>
            <Card.Footer className="d-flex justify-content-between">
                <Card.Text><BsStopwatch/> Assessments</Card.Text>
                <Card.Text>Yes</Card.Text>
            </Card.Footer>
            </Card>

            <div className="py-4">
            <h3> Relevant Courses </h3>
            <div className="d-flex justify-content-evenly">
                <div><img src="" /></div>
                <div>Course title</div> 
            </div>
            </div>
        </div>
    );
};

export default LeftSideBar;