import React from 'react';
import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Button } from 'reactstrap';

import reset from "../../actionCreators/app/reset";

const ResetAppButton = ({ onReset }) => (
    <Button color="primary" onClick={onReset}>
        Reset app
    </Button>
);

const mapDispatchToProps = dispatch => bindActionCreators({
    reset
}, dispatch);

export default compose(
    connect(null, mapDispatchToProps),
    withProps(({ reset }) => {
        return {
            onReset: () => {
                reset();
            }
        }
    })
)(ResetAppButton);