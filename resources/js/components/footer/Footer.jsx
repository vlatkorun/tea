import React from 'react';
import { Container } from 'reactstrap';

import ResetAppButton from './ResetAppButton';

const Footer = () => (
    <footer className="text-muted">
        <Container>
            <p>Vladimir Runchev &copy; 2019</p>
            <ResetAppButton />
        </Container>
    </footer>
);

export default Footer;