import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, InputGroup } from 'react-bootstrap';

function DinerDishInput(props: any) {

    // Holds the selected day of the week
    const [dayOfWeek, setDayOfWeek] = useState('')
    // Holds the name of the dish
    const [dishName, setDishName] = useState('')

    // Function to handle form submission
    function postDishOnSubmit() {
        axios.post('http://localhost:5044/api/Diner/postDinerDish', {
                dishName,
                dayOfWeek
        })
            .then(() => {
                props.getDishes() // GET updated list of dishes
                setDayOfWeek('') // Reset day of the week
                setDishName('') // Reset dish name
            })
            .catch((err: string) => {
                console.error(err);
              });
    }


    // Function to update the dish name from input
    function updateDishNameOnChange(val: any) {
        // Update dishName state with input value
        setDishName(val)
    }

    // Function to update the selected day of the week
    function updateDayOfTheWeekOnChange(selected: any) {
        // Update dayOfWeek state with selected value
        setDayOfWeek(selected.value)
    }

    return (
        <div className='d-flex justify-content-center'>
            <InputGroup className="w-50">
                <Form.Select aria-label="Default select example" value={dayOfWeek} onChange={(e) => updateDayOfTheWeekOnChange(e.target)}>
                    <option>Day of the Week</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                </Form.Select>
                <Form.Control placeholder='What would you like your lunch to be?' value={dishName} onChange={(e) => updateDishNameOnChange(e.target.value)} />
                <Button style={{ backgroundColor: 'blue' }} onClick={postDishOnSubmit}>Submit</Button>
            </InputGroup>
        </div>
    )
}


export default DinerDishInput;