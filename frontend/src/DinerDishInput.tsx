import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

function DinerDishInput() {
    return (
        <div className='d-flex justify-content-center'>
            <InputGroup className="w-50">
                <Form.Select aria-label="Default select example">
                    <option>Day of the Week</option>
                    <option value="1">Monday</option>
                    <option value="2">Tuesday</option>
                    <option value="3">Wednesday</option>
                    <option value="3">Thursday</option>
                    <option value="3">Friday</option>
                </Form.Select>
                <Form.Control placeholder='What would you like your lunch to be?' />
                <Button style={{backgroundColor: 'blue'}}>Submit</Button>
            </InputGroup>
        </div>
    )
}


export default DinerDishInput;