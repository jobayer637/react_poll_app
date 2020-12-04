import React from 'react'
import {
    Card, CardText, CardBody, CardTitle,
    Button, FormGroup, Input, Label,
} from 'reactstrap';

const Right = ({ poll, incrementOption, incrementPollOption, DeleteSelectedPoll, EditSelectedPoll }) => {
    return <Card>
        <CardBody>
            <CardTitle tag="h4">{poll.title}</CardTitle>
            <CardText>{poll.desc}</CardText>

            <div className="d-flex justify-content-between mt-4">
                <CardTitle tag="h5">Options</CardTitle>
                <div className="d-flex justify-content-between">
                    <Button onClick={() => EditSelectedPoll(poll.id)} size="sm" color="warning" className="mx-1">Edit</Button>
                    <Button onClick={() => DeleteSelectedPoll(poll.id)} size="sm" color="danger">Delete</Button>
                </div>
            </div>

            <FormGroup check>
                {poll.option.filter((option => {
                    if (option.option) {
                        return option
                    }
                })).map((option, i) => (
                    <div className="d-flex justify-content-between mt-2">

                        <Label className="w-100" check>
                            <Input onChange={() => incrementOption(i)} type="radio" name="option" /> {option.option}
                        </Label>
                        <div className="d-flex justify-content-between">
                            <Button size="sm" color="danger" className="mx-1 px-2">{option.count}</Button>
                            <Button size="sm" color="warning">{poll.counter ? ((option.count * 100) / (poll.counter)).toPrecision(3) : 0}%</Button>
                        </div>
                    </div>
                ))}
            </FormGroup>

            <FormGroup className="my-4">
                <Label for="name">Enter Your Name</Label>
                <Input type="text" name="name" id="name" placeholder="with a placeholder" />
            </FormGroup>

            <Button onClick={() => incrementPollOption(poll.id)} color="primary">Submit</Button>
        </CardBody>
    </Card>
}

export default Right