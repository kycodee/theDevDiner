import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, InputGroup } from 'react-bootstrap';

function DinerDishInput() {


    const [dayOfWeek, setDayOfWeek] = useState('')
    const [dishName, setDishName] = useState('')

    function postDishOnSubmit() {
        axios.post('http://localhost:5044/api/Diner/postDinerDish', {
                dishName,
                dayOfWeek
        })
            .then(() => {
                console.log('post successful')
            })
            .catch((err: string) => {
                console.error(err);
              });
    }


    function updateDishNameOnChange(e: any) {
        setDishName(e)
    }

    function updateDayOfTheWeekOnChange(e: any) {
        setDayOfWeek(e.value)
    }

    return (
        <div className='d-flex justify-content-center'>
            <InputGroup className="w-50">
                <Form.Select aria-label="Default select example" onChange={(e) => updateDayOfTheWeekOnChange(e.target)}>
                    <option>Day of the Week</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                </Form.Select>
                <Form.Control placeholder='What would you like your lunch to be?' onChange={(e) => updateDishNameOnChange(e.target.value)} />
                <Button style={{ backgroundColor: 'blue' }} onClick={postDishOnSubmit}>Submit</Button>
            </InputGroup>
        </div>
    )
}


export default DinerDishInput;