import React, { useState } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Button, Form, Modal } from "react-bootstrap";

function DinerDishCard(props: any) {

    // Controls modal visibility
    const [show, setShow] = useState(false);
    // Holds the value for the dish being updated
    const [updatedDish, setUpdatedDish] = useState('')

    // Function to close the modal
    const handleClose = () => setShow(false);
    // Function to show the modal
    const handleShow = () => setShow(true);

    // Function to delete a dish
    function deleteDishOnClick(id: any) {
        axios.delete(`http://localhost:5044/api/Diner/deleteDish${id}`)
            .then(() => {
                // GET updated list of dishes
                props.getDishes()
            })
            .catch((err: string) => {
                console.error(err);
            });
    }

    // Function to update a dish
    function dishUpdateOnClick(id: any, dayOfWeek: string) {
        axios.put(`http://localhost:5044/api/Diner/updateDish/${id}`, {
            id,
            dishName: updatedDish,
            dayOfWeek
        })
            .then(() => {
                // GET updated list of dishes
                props.getDishes()
            })
            .catch((err: string) => {
                console.error(err);
            });

        // Close the modal
        handleClose()
    }

    return (
        <div style={{ width: '70vw', height: '600px', marginTop: '50px' }} className='mx-auto'>
            <Container fluid>
                <Row>
                    {props.dishes.map((dish: any) => (

                        <Col key={dish.id}>
                            <Card style={{ width: '18rem', height: '250px', margin: '15px' }}>
                                <Card.Body>
                                    <Card.Title>{dish.dishName}</Card.Title>
                                    <Card.Text>
                                        {`${dish.dishName} is what's for lunch on ${dish.dayOfWeek}`}
                                    </Card.Text>
                                    <Button style={{ backgroundColor: 'orange' }} onClick={handleShow}>
                                        Update Lunch Dish
                                    </Button>

                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Update Dish:</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Control
                                                        placeholder="Change dish here"
                                                        onChange={(e) => setUpdatedDish(e.target.value)}
                                                        autoFocus
                                                    />
                                                </Form.Group>
                                            </Form>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Close
                                            </Button>
                                            <Button variant="primary" onClick={() => dishUpdateOnClick(dish.id, dish.dayOfWeek)}>
                                                Save Changes
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                    <div>
                                        <Button style={{ margin: '5px', backgroundColor: 'red', border: 'none' }} onClick={() => deleteDishOnClick(dish.id)} >Delete Dish</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default DinerDishCard