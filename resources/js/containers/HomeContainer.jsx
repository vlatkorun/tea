import React from 'react';
import { compose } from 'recompose';

import Home from '../layouts/Home';
import withLayout from '../hoc/layout/withLayout';

import HomeCta from '../components/home/HomeCta';

const HomeContainer = () => (
    <HomeCta />
);

export default compose(
    withLayout(Home),
)(HomeContainer);