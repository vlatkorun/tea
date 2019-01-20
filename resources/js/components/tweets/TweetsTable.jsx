import React from 'react';
import PropTypes from 'prop-types';
import { Table, Alert } from 'reactstrap';
import { compose, branch, renderComponent } from 'recompose';

import TweetTableRow from './TweetTableRow';
import Spinner from '../loader/Spinner';

const TweetsTable = ({ tweets }) => {

    if(tweets.length === 0) {
        return (
            <Alert color="danger">
                No results found!
            </Alert>
        )
    }

    return (
        <Table responsive>
            <thead>
            <tr>
                <th>ID</th>
                <th>Text</th>
                <th>Keyword</th>
                <th>Hashtags</th>
                <th>Entities</th>
                <th>Created at</th>
            </tr>
            </thead>
            <tbody>
            {tweets.map((tweet, index) => <TweetTableRow key={index} {...tweet} />)}
            </tbody>
        </Table>
    )
};

TweetsTable.propTypes = {
    tweets: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

export default compose(
    branch(
        ({ isLoading }) => {
            return isLoading === true;
        },
        renderComponent(Spinner)
    )
)(TweetsTable);