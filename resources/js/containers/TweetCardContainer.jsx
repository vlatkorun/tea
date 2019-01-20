import React, { Fragment } from 'react';
import { compose, branch, renderComponent } from 'recompose';
import { connect } from 'react-redux';

import TweetCard from "../components/tweets/TweetCard";
import Spinner from '../components/loader/Spinner';

import getTweetSelector from "../selectors/tweets/getTweetSelector";
import getTweetLoadingSelector from "../selectors/tweets/getTweetLoadingSelector";

const TweetCardContainer = ({ tweet }) => (
    <Fragment>
        { tweet && <TweetCard {...tweet} /> }
    </Fragment>
);

const mapStateToProps = state => ({
    tweet: getTweetSelector(state),
    isLoadingTweet: getTweetLoadingSelector(state),
});

export default compose(
    connect(mapStateToProps),
    branch(
        ({ isLoadingTweet }) => {
            return isLoadingTweet === true;
        },
        renderComponent(Spinner)
    )
)(TweetCardContainer);