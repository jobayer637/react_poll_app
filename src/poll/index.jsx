import React, { Component } from 'react'
import sid from 'short-id'
import {
    Col, Row,
} from 'reactstrap';

import demoPolls from './demo'
import Left from './left/index'
import Right from './right/index'

const pollDefine = {
    id: '',
    title: '',
    desc: '',
    counter: 0,
    option: [
        { option: '', count: 0 },
        { option: '', count: 0 },
    ]
}


class Poll extends Component {

    state = {
        modalIsOpen: false,
        modalUpdateBtn: false,
        polls: [],
        selectedPoll: {},
        activeRight: 0,
        incrementOptionIndex: '',
        records: [],
        searchPoll: '',
        newPoll: {
            id: '',
            title: '',
            desc: '',
            counter: 0,
            option: [
                { option: '', count: 0 },
                //{ option: '', count: 0 },
            ]
        },

        incrementNewOption: [],
    }

    componentDidMount = () => {
        this.setState({
            polls: demoPolls,
            newPoll: pollDefine
        })
    }

    selectedPoll = value => {
        const selectedPoll = this.state.polls.find(poll => poll.id === value)
        this.setState({
            selectedPoll,
            activeRight: 1
        })
    }

    incrementOption = incrementOptionIndex => {
        this.setState({
            incrementOptionIndex
        })
    }

    incrementPollOption = pid => {
        if (pid != null && this.state.incrementOptionIndex !== '') {
            const i = this.state.incrementOptionIndex
            const polls = [...this.state.polls]
            const findPoll = polls.find(poll => poll.id === pid)
            findPoll.option[i].count += 1
            findPoll.counter += 1
            this.setState({
                polls
            })

        }
    }


    searchPoll = event => {
        this.setState({ searchPoll: event.target.value })
    }

    handleCreateNewPoll = event => {
        event.preventDefault()

        if (event.target.name === 'update') {
            alert('update')
        }

        const Poll = {
            id: sid.generate(),
            title: this.state.newPoll.title,
            desc: this.state.newPoll.desc,
            counter: 0,
            option: [
                { option: this.state.newPoll.option0, count: 0 },
                { option: this.state.newPoll.option1, count: 0 },
                { option: this.state.newPoll.option2, count: 0 },
                { option: this.state.newPoll.option3, count: 0 },
                { option: this.state.newPoll.option4, count: 0 },
            ]
        }

        let option = []
        Poll.option.filter(poll => {
            if (poll.option) {
                return poll
            }
        }).map(poll => {
            option.push(poll)
        })

        Poll.option = option

        console.log(Poll)

        if (!Poll.title) {
            alert("Opps!! Error!.. Please  Enter Poll Title")
        } else {
            this.setState({
                polls: [
                    ...this.state.polls,
                    Poll
                ]
            })

            event.target.reset()
            this.setState({
                newPoll: pollDefine
            })
        }

    }

    handleInputChange = event => {
        //console.log(event.target.name)
        //console.log(event.target.value)
        this.setState({
            newPoll: {
                ...this.state.newPoll,
                [event.target.name]: event.target.value
            }
        })
    }

    incrementOptionForm = () => {
        const option = {
            option: '',
            count: 0
        }
        if (this.state.newPoll.option.length <= 4) {
            this.setState({
                newPoll: {
                    option: [
                        ...this.state.newPoll.option,
                        option
                    ],
                    title: this.state.newPoll.title,
                    desc: this.state.newPoll.desc
                },
            })
        } else {
            alert('Maximum option <= 5')
        }
    }

    DeleteSelectedPoll = id => {
        const polls = [...this.state.polls]
        const index = polls.findIndex(poll => poll.id === id)
        polls.splice(index, 1)
        this.setState({
            polls,
            selectedPoll: {},
            activeRight: 0
        })
    }

    EditSelectedPoll = id => {
        const polls = [...this.state.polls]
        const index = polls.find(poll => poll.id === id)
        console.log(index)
        this.setState({
            modalIsOpen: true,
            modalUpdateBtn: true,
            newPoll: index,
        })
    }

    configModal = v => {
        console.log(v.target.name)
        if (v.target.name === 'close') {
            this.setState({
                newPoll: pollDefine
            })
        }
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        })
    }

    render() {
        const { polls, selectedPoll, searchPoll } = this.state
        return <Row>
            <Col md={4}>
                <Left
                    polls={polls}
                    selectedPoll={this.selectedPoll}
                    searchPoll={this.searchPoll}
                    searchValue={searchPoll}
                    handleCreateNewPoll={this.handleCreateNewPoll}
                    handleInputChange={this.handleInputChange}
                    initialPoll={this.state.newPoll}
                    incrementOptionForm={this.incrementOptionForm}
                    modalIsOpen={this.state.modalIsOpen}
                    modalUpdateBtn={this.state.modalUpdateBtn}
                    configModal={this.configModal}
                />
            </Col>
            <Col md={8}>
                {this.state.activeRight === 1 && <Right
                    poll={selectedPoll}
                    incrementOption={this.incrementOption}
                    incrementPollOption={this.incrementPollOption}
                    DeleteSelectedPoll={this.DeleteSelectedPoll}
                    EditSelectedPoll={this.EditSelectedPoll}
                />}
            </Col>
        </Row>
    }
}

export default Poll