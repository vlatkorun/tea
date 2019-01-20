import React from 'react';
import PropTypes from 'prop-types';

import NavContainer from '../containers/NavContainer';
import Footer from '../components/footer/Footer';

const Main = ({ children }) => (
    <div className="main-layout">
        <NavContainer />
        { children }
        <Footer />
    </div>
);

Main.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Main;