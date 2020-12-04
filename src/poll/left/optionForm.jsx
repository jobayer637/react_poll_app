import React from 'react'
import { FormGroup, InputGroup, Button, Input } from 'reactstrap'

const Option = ({ type, value, name, placeholder, handleInputChange, countOption }) => {
    console.log(value)
    return <>
        <FormGroup className="d-flex justify-content-between">
            <InputGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input
                    type={type}
                    name={name}
                    //value={value}
                    placeholder={placeholder}
                    onChange={handleInputChange}
                />
            </InputGroup>
            <Button type="button" size="sm" color="danger" disabled={countOption < 2? true:false} className="rounded-0">Delete</Button>
        </FormGroup>
    </>
}

export default Option