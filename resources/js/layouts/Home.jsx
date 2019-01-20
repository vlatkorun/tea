import React from 'react';
import PropTypes from 'prop-types';

import NavContainer from '../containers/NavContainer';
import Footer from '../components/footer/Footer';

const Home = ({ children }) => (
    <div className="home-layout">
        <NavContainer />
        { children }
        <Footer />
    </div>
);

Home.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Home;