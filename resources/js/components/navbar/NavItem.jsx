import React from 'react';
import PropTypes from 'prop-types';
import { NavItem as BaseNavItem, NavLink } from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";

const NavItem = ({ link, name, active, disabled }) => (
    <BaseNavItem active={ active }>
        <NavLink tag={ RRNavLink } activeClassName="active" to={ link } exact active={ active } disabled={ disabled }>
            { name }
        </NavLink>
    </BaseNavItem>
);

NavItem.propTypes = {
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
};

export default NavItem;