import React from 'react';

const TweetHashtagsList = ({ hashtags }) => (
    <ul>
        { hashtags.map(({ value }, index) => (
            <li key={index}>
                Value: { value }
            </li>
        )) }
    </ul>
);

export default TweetHashtagsList;