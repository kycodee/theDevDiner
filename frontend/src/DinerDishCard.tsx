import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

function DinerDishCard() {
    return (
        <div style={{ width: '70vw', height: '600px', marginTop: '50px' }} className='mx-auto'>
            <Container fluid>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem', height: '250px', margin: '15px' }}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
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