import React from 'react'
import { FormGroup, Input, Label } from 'reactstrap'

const InputForm = ({ title, type, value, id, name, placeholder, handleInputChange }) => {
    return <>
        <FormGroup>
            <Label for="exampleEmail">{title}</Label>
            <Input
                type={type}
                name={name}
                id={id}
                value={value}
                placeholder={placeholder}
                onChange={handleInputChange}
            />
        </FormGroup>
    </>
}

export default InputForm