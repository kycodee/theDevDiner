import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, InputGroup } from 'react-bootstrap';

function DinerDishInput() {


    const [dayOfWeek, setDayOfWeek] = useState('')


    function dayOfTheWeekOnChange(e: any) {
        setDayOfWeek(e.value)
    }

    return (
        <div className='d-flex justify-content-center'>
            <InputGroup className="w-50">
                <Form.Select aria-label="Default select example" onChange={(e) => dayOfTheWeekOnChange(e.target)}>
                    <option>Day of the Week</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                </Form.Select>
                <Form.Control placeholder='What would you like your lunch to be?' />
                <Button style={{backgroundColor: 'blue'}}>Submit</Button>
            </InputGroup>
        </div>
    )
}


export default DinerDishInput;