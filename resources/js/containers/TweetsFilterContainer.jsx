import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { compose, withHandlers, withState } from 'recompose';
import { Collapse, Button } from 'reactstrap';

import TweetsFilterForm from '../components/tweets/TweetsFilterForm';

const TweetsFilterContainer = ({ isOpen, toggle }) => (
    <Fragment>
        <Button color={'outline-secondary'} onClick={toggle} size={'sm'}>
            Filter
        </Button>
        <Collapse isOpen={isOpen} className={'mt-4'}>
            <TweetsFilterForm />
        </Collapse>
    </Fragment>
);

TweetsFilterContainer.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
};

export default compose(
    withState('isOpen', 'setIsOpen', false),
    withHandlers({
        toggle: ({ setIsOpen, isOpen }) => event => {
            setIsOpen(!isOpen);
        },
    })
)(TweetsFilterContainer);

