import React, { useState } from 'react'
import Option from './optionForm'
import InputForm from './inputForm'
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Form, Badge
} from 'reactstrap'

const CreatePoll = ({ handleCreateNewPoll, handleInputChange, poll, incrementOption, modalUpdateBtn, modalIsOpen, configModal }) => {
    //console.log(poll)
    //console.log(modalIsOpen)
    //const [isOpen, setIsOpen] = useState(false)
    return <>
        <Button
            name='add'
            onClick={configModal}
            color="warning" size="sm"
            className="rounded-0">
            Add New Poll
        </Button>

        <Modal isOpen={modalIsOpen} className="rounded-0">
            <Form onSubmit={handleCreateNewPoll}>
                <ModalHeader>
                    <h4>Create New Poll</h4>
                </ModalHeader>

                <ModalBody>

                    <InputForm
                        title="Enter Title"
                        type="text"
                        name="title"
                        id="title"
                        value={poll.title}
                        placeholder="Enter Title"
                        handleInputChange={handleInputChange}
                    />

                    <InputForm
                        title="Enter Description"
                        type="textarea"
                        name="desc"
                        id="description"
                        value={poll.desc}
                        placeholder="Enter Description"
                        handleInputChange={handleInputChange}
                    />

                    <h5 className="my-3">
                        Enter Opiton
                        <Badge type="button" onClick={incrementOption} className="ml-4" tag="button" color="warning">Add More Option</Badge>
                    </h5>

                    {
                        //console.log(poll.option)
                        poll.option.map((option, index) => (
                            //console.log(option.option, index)
                            <Option
                                type="text"
                                name={"option" + index}
                                value={option.option}
                                placeholder={"option" + index}
                                countOption={index}
                                handleInputChange={handleInputChange}
                            />
                        ))
                    }
                </ModalBody>

                <ModalFooter>
                    <Button type="submit" className="rounded-0" color="primary" size="md">Submit</Button>
                    <Button
                        name="close"
                        onClick={configModal}
                        className="rounded-0"
                        color="danger" size="md">
                        Close
                </Button>
                </ModalFooter>
            </Form>
        </Modal>
    </>
}

export default CreatePoll