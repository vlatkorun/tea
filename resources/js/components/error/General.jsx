import React from 'react';
import PropTypes from 'prop-types';

const General = ({ httpStatus, message }) => (
    <div>
        <div className={'d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center mt-4 mb-3 border-bottom'}>
            <h1>
                { httpStatus }
            </h1>
        </div>
        <p>
            { message }
        </p>
    </div>
);

General.propTypes = {
    httpStatus: PropTypes.number,
    message: PropTypes.string.isRequired,
};

export default General;