import React from 'react'
import Search from './search'
import CreatePoll from './createPoll'
import {
    Card, CardBody,
    ListGroup, ListGroupItem
} from 'reactstrap';

const Left = ({
    initialPoll,
    polls,
    selectedPoll,
    searchPoll,
    searchValue,
    handleCreateNewPoll,
    handleInputChange,
    incrementOptionForm,
    modalIsOpen,
    modalUpdateBtn,
    configModal

}) => {
    return <Card>
        <Search
            searchPoll={searchPoll}
        />

        <CardBody className="my-3">
            <div className="d-flex justify-content-between my-2">
                <h4>List of Polls</h4>
                <CreatePoll
                    poll={initialPoll}
                    handleCreateNewPoll={handleCreateNewPoll}
                    handleInputChange={handleInputChange}
                    incrementOption={incrementOptionForm}
                    modalUpdateBtn={modalUpdateBtn}
                    modalIsOpen={modalIsOpen}
                    configModal={configModal}

                />
            </div>
            {polls.filter(poll => {
                if (searchValue == null) {
                    return poll
                } else if (poll.title.toLowerCase().includes(searchValue.toLowerCase())) {
                    return poll
                }
            }).map(poll => (
                <ListGroup>
                    <ListGroupItem
                        onClick={() => selectedPoll(poll.id)}
                        tag="button"
                        action
                        className="rounded-0">
                        {poll.title}
                    </ListGroupItem>
                </ListGroup>
            ))}
        </CardBody>
    </Card>
}

export default Left