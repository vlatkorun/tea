import React from 'react';
import PropTypes from 'prop-types';
import { compose, withHandlers, withState } from 'recompose';
import { Collapse, Navbar as BaseNavBar, NavbarToggler, Nav, Container } from 'reactstrap';

import NavItem from './NavItem';
import NavbarBrand from './NavbarBrand';

const Navbar = ({ isOpen, toggle, items }) => (
    <BaseNavBar color="dark" dark expand="sm" className={"shadow-sm"}>
        <Container>
            <NavbarBrand link={'/'} />
            <NavbarToggler onClick={ toggle } />
            <Collapse isOpen={ isOpen } navbar>
                <Nav className="ml-auto" navbar>
                    {items && items.map((item, index) => <NavItem key={ index } {...item} />)}
                </Nav>
            </Collapse>
        </Container>
    </BaseNavBar>
);

Navbar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
};

export default compose(
    withState('isOpen', 'setIsOpen', false),
    withHandlers({
        toggle: ({ setIsOpen, isOpen }) => event => {
            setIsOpen(!isOpen);
        },
    })
)(Navbar);