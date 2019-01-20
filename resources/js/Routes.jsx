import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { compose, branch, renderComponent } from 'recompose';
import { connect } from 'react-redux';

import getHasErrorSelector from "./selectors/errors/getHasErrorSelector";
import ErrorContainer from './containers/ErrorContainer';

import HomeContainer from './containers/HomeContainer';
import TweetsContainer from './containers/TweetsContainer';
import TweetContainer from './containers/TweetContainer';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/tweets" component={TweetsContainer} />
        <Route exact path="/tweets/:id" component={TweetContainer} />
    </Switch>
);

const mapStateToProps = state => ({
    error: getHasErrorSelector(state),
});

export default compose(
    connect(mapStateToProps),
    branch(
        ({ error }) => {
            return error === true;
        },
        renderComponent(ErrorContainer)
    )
)(Routes);