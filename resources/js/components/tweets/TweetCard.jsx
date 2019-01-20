import React from 'react';
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem } from 'reactstrap';

import TweetHashtagsList from './TweetHashtagsList';
import TweetEntitiesList from './TweetEntitiesList';

const TweetCard = ({ id, keyword, created_at, hashtags, entities, text }) => (
    <ListGroup>
        <ListGroupItem>
            <p className={'mb-0'}>
                <strong>ID:</strong> { id }
            </p>
        </ListGroupItem>
        <ListGroupItem>
            <p className={'mb-0'}>
                <strong>Text:</strong> { text }
            </p>
        </ListGroupItem>
        <ListGroupItem>
            <p className={'mb-0'}>
                <strong>Keyword:</strong > { keyword }
            </p>
        </ListGroupItem>
        <ListGroupItem>
            <p className={'mb-0'}>
                <strong>Hashtags:</strong >
            </p>
            { hashtags && <TweetHashtagsList hashtags={hashtags} /> }
        </ListGroupItem>
        <ListGroupItem>
            <p className={'mb-0'}>
                <strong>Entities:</strong >
            </p>
            { entities && <TweetEntitiesList entities={entities} /> }
        </ListGroupItem>
        <ListGroupItem>
            <p className={'mb-0'}>
                <strong>Created at:</strong> { created_at }
            </p>
        </ListGroupItem>
    </ListGroup>
);

TweetCard.propTypes = {
    id: PropTypes.number.isRequired,
    keyword: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    hashtags: PropTypes.array,
    entities: PropTypes.array,
};

export default TweetCard;