import React from 'react'
import { Input, CardBody } from 'reactstrap'

const Search = ({ searchPoll }) => {
    return <>
        <CardBody>
            <Input
                className="rounded-0"
                onChange={searchPoll}
                placeholder="Search Poll"
            />
        </CardBody>
    </>
}

export default Search