import React, { useState } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

function DinerDishCard(props: any) {

    
    function deleteDishOnClick(id: any) {
        axios.delete(`http://localhost:5044/api/Diner/deleteDish${id}`)
        .catch((err: string) => {
            console.error(err);
        });
    }

    return (
        <div style={{ width: '70vw', height: '600px', marginTop: '50px' }} className='mx-auto'>
            <Container fluid>
                <Row>
                    {props.dishes.map((dish: any, index: any) => (

                    <Col key={index}>
                        <Card style={{ width: '18rem', height: '250px', margin: '15px' }}>
                            <Card.Body>
                                <Card.Title>{dish.dishName}</Card.Title>
                                <Card.Text>
                                   {`${dish.dishName} is what's for lunch on ${dish.dayOfWeek}`}
                                </Card.Text>
                                <Button style={{backgroundColor: 'orange'}} href="#">Update Lunch Dish</Button>
                                <div>
                                <Button style={{margin: '5px', backgroundColor: 'red', border: 'none'}} onClick={() => deleteDishOnClick(dish.id)} >Delete Dish</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    ))}
                </Row>
            </Container>
            {/* <Card style={{ width: '18rem', height: '250px', margin: '15px'}}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card> */}
        </div>
    )
}

export default DinerDishCard