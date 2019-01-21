import React, { Fragment } from 'react';
import { compose } from 'recompose';

import Home from '../layouts/Home';
import withLayout from '../hoc/layout/withLayout';

import HomeCta from '../components/home/HomeCta';

import FetchTweetsModalContainer from './FetchTweetsModalContainer';

const HomeContainer = () => (
    <Fragment>
        <HomeCta />
        <FetchTweetsModalContainer/>
    </Fragment>
);

export default compose(
    withLayout(Home),
)(HomeContainer);