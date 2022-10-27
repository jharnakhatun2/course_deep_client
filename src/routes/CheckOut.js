import React from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';

const CheckOut = () => {
    return (
        <div className="p-5">
            <h2 className="text-center">Course CheckOut</h2>
            <hr className="w-25 mx-auto" />
            <Container className="p-5 mx-auto">
                <Row className="justify-content-lg-center">
                    <Col lg="7" >
                        <Form className="border rounded p-5" action="/action_page.php">
                        <h5 className="mb-3">Billing address :</h5>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Enter address" required />
                            </Form.Group>

                            <Form.Group className="mb-3 d-flex justify-content-between gap-3">
                                <div>
                                <Form.Label>Country</Form.Label>
                                <Form.Control type="text" placeholder="Enter country" required />
                                </div>
                                <div>
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" placeholder="Enter state" required />
                                </div>
                                <div>
                                <Form.Label>Zip</Form.Label>
                                <Form.Control type="text" placeholder="Enter zip code" />
                                </div>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Shipping address same as billing" />
                                <Form.Check type="checkbox" label="Save this information for next time" />
                            </Form.Group>
                            <hr className="my-5"></hr>

                            <h5 className="my-3">Payment :</h5>
                            <Form.Group className="mb-3" controlId="formBasicRadio">
                            <input type="radio" value=" Credit card" name="creditCard" /> Credit card <br></br>
                            <input type="radio" value=" Debit card" name="debitCard"/> Debit card <br></br>
                            <input type="radio" value=" Paypal" name="paypal"/> Paypal
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name on card</Form.Label>
                                <Form.Control type="text" placeholder="name as display on card"  required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Credit card number</Form.Label>
                                <Form.Control type="text" placeholder="card number" required />
                            </Form.Group>
                           
                            <Form.Group className="mb-3 d-flex justify-content-between gap-3">
                                <div>
                                <Form.Label>Expiration</Form.Label>
                                <Form.Control type="date" placeholder="Expiration date" required />
                                </div>
                                <div>
                                <Form.Label>CVV</Form.Label>
                                <Form.Control type="text" placeholder="security code" required />
                                </div>
                            </Form.Group>
                            <hr className="my-5"></hr>

                            <div className="btn btn-warning w-100 p-3" type="submit">
                                Submit
                            </div>
                        </Form>
                    </Col>


                    <Col lg="auto" className="d-flex justify-content-between" >
                        <Card className="p-4">
                            <div className="d-flex justify-content-between">
                                <h5>Your Cart</h5>
                                <h5 className="bg-warning p-2 rounded-pill">4</h5>
                            </div>
                            <Card.Footer className="d-flex justify-content-between">
                                <Card.Text>Product Name</Card.Text>
                                <Card.Text>$16.89</Card.Text>
                            </Card.Footer>
                            <Card.Footer className="d-flex justify-content-between">
                                <Card.Text>Product Name</Card.Text>
                                <Card.Text>$16.89</Card.Text>
                            </Card.Footer>
                            <Card.Footer className="d-flex justify-content-between">
                                <Card.Text>Product Name</Card.Text>
                                <Card.Text>$16.89</Card.Text>
                            </Card.Footer>
                            <Card.Footer className="d-flex justify-content-between">
                                <Card.Text>Product Name</Card.Text>
                                <Card.Text>$16.89</Card.Text>
                            </Card.Footer>
                            <div className="d-flex justify-content-between">
                                <h5>Total (USD)</h5>
                                <h5>$100.89</h5>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row>

                </Row>
            </Container>
        </div>
    );
};
export default CheckOut;