import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import FetchTweetsForm from './FetchTweetsForm';

const FetchTweetsModal = ({ isOpen, toggle, className }) => (
    <Modal isOpen={isOpen} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
            Fetch tweets from Twitter API
        </ModalHeader>
        <ModalBody>
            <FetchTweetsForm />
        </ModalBody>
        <ModalFooter>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
    </Modal>
);

FetchTweetsModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    className: PropTypes.string,
};

export default FetchTweetsModal;