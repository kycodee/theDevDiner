import React from 'react';
import { Button, Dropdown, DropdownButton, Form, InputGroup } from 'react-bootstrap';

function Diner() {
    return (
        <div className='d-flex justify-content-center'>
        <InputGroup className="w-50">
        <DropdownButton
          variant="outline-secondary"
          title="Day of the Week"
          id="input-group-dropdown-3"
        >
          <Dropdown.Item href="#">Monday</Dropdown.Item>
          <Dropdown.Item href="#">Tuesday</Dropdown.Item>
          <Dropdown.Item href="#">Wednesday</Dropdown.Item>
          <Dropdown.Item href="#">Thursday</Dropdown.Item>
          <Dropdown.Item href="#">Friday</Dropdown.Item>
          <Dropdown.Item href="#">Saturday</Dropdown.Item>
          <Dropdown.Item href="#">Sunday</Dropdown.Item>
        </DropdownButton>
        <Form.Control aria-label="Text input with 2 dropdown buttons" />
        <Button>Submit</Button>
      </InputGroup>
      </div>
    )
}

export default Diner;