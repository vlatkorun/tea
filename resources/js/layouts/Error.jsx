import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

import NavContainer from '../containers/NavContainer';
import Footer from '../components/footer/Footer';

const Error = ({ children }) => (
    <div className="error-layout">
        <NavContainer />
        <Container>
            { children }
        </Container>
        <Footer />
    </div>
);

Error.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Error;