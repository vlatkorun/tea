import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import TweetsTable from '../components/tweets/TweetsTable';

import getTweetsSelector from '../selectors/tweets/getTweetsSelector';
import getTweetsLoadingSelector from '../selectors/tweets/getTweetsLoadingSelector';

const TweetsTableContainer = ({ tweets, isLoadingTweets }) => (
    <TweetsTable tweets={ tweets } isLoading={ isLoadingTweets } />
);

const mapStateToProps = state => ({
    tweets: getTweetsSelector(state),
    isLoadingTweets: getTweetsLoadingSelector(state),
});

export default compose(
    connect(mapStateToProps),
)(TweetsTableContainer);