import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import General from '../components/error/General';
import Error from '../layouts/Error';
import withLayout from '../hoc/layout/withLayout';

import getHttpStatusSelector from '../selectors/errors/getHttpStatusSelector';
import getErrorMessageSelector from '../selectors/errors/getErrorMessageSelector';

const ErrorContainer = (props) => (
    <General {...props} />
);

const mapStateToProps = state => ({
    httpStatus: getHttpStatusSelector(state),
    message: getErrorMessageSelector(state),
});

export default compose(
    withLayout(Error),
    connect(mapStateToProps),
)(ErrorContainer);