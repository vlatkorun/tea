import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { NavbarBrand as BaseNavbarBrand } from 'reactstrap';

const NavbarBrand = ({ link }) => (
    <BaseNavbarBrand tag={ Link } to={ link }>
        <FontAwesomeIcon icon={ faTwitter } /> Twitter Entity Analysis
    </BaseNavbarBrand>
);

NavbarBrand.propTypes = {
    link: PropTypes.string.isRequired,
};

export default NavbarBrand;