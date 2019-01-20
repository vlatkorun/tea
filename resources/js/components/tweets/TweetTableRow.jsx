import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const TweetsTableRow = ({ id, keyword, created_at, hashtags, entities, text }) => (
    <tr>
        <th scope="row">
            { id }
        </th>
        <td>
            <Link to={`/tweets/${id}`}>
                { text }
            </Link>
        </td>
        <td>
            { keyword }
        </td>
        <td>
            { hashtags.length }
        </td>
        <td>
            { entities.length }
        </td>
        <td>
            { created_at }
        </td>
    </tr>
);

TweetsTableRow.propTypes = {
    id: PropTypes.number.isRequired,
    keyword: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    hashtags: PropTypes.array,
    entities: PropTypes.array,
};

export default TweetsTableRow;