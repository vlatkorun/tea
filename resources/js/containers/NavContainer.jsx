import React from 'react';
import { compose, withProps } from 'recompose';

import Navbar from '../components/navbar/Navbar';

const NavContainer = ({ items }) => (
    <Navbar items={items} />
);

export default compose(
    withProps((props) => {
        return {
            items: [
                {
                    name: 'Home',
                    link: '/',
                    active: false,
                    disabled: false,
                },
                {
                    name: 'Tweets',
                    link: '/tweets',
                    active: false,
                    disabled: false,
                }
            ]
        }
    }),
)(NavContainer);