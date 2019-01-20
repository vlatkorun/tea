import React from 'react';

const TweetEntitiesList = ({ entities }) => (
    <ul>
        { entities.map(({ name, type }, index) => (
            <li key={index}>
                Value: { name } <br/>
                Type: { type }
            </li>
        )) }
    </ul>
);

export default TweetEntitiesList;