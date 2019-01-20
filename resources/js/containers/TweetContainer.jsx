import React from 'react';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Button, ButtonToolbar } from 'reactstrap';
import { withRouter } from "react-router-dom";

import TweetCardContainer from './TweetCardContainer';

import Main from '../layouts/Main';
import withLayout from '../hoc/layout/withLayout';

import getTweetSelector from "../selectors/tweets/getTweetSelector";
import getTweetLoadingSelector from "../selectors/tweets/getTweetLoadingSelector";

import getTweet from "../actionCreators/tweets/getTweet";

const TweetContainer = ({ getTweet, tweet, isLoadingTweet, match }) => (
    <Container className={'mb-3'}>
        <div className={'d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center mt-4 mb-3'}>
            <h1>
                Tweet details
            </h1>
            <ButtonToolbar>
                <Button className={'mr-3'} color={'outline-secondary'} size={'sm'}>
                    Fetch from API
                </Button>
                <Button color={'outline-secondary'} onClick={() => getTweet(parseInt(match.params.id), { include: 'hashtags,entities'})} size={'sm'}>
                    Refresh
                </Button>
            </ButtonToolbar>
        </div>
        <TweetCardContainer />
    </Container>
);

const mapStateToProps = state => ({
    tweet: getTweetSelector(state),
    isLoadingTweet: getTweetLoadingSelector(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getTweet
}, dispatch);

export default compose(
    withLayout(Main),
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
        componentDidMount() {

            const {
                tweet,
                getTweet,
                match,
            } = this.props;

            if(!tweet || parseInt(tweet.id) !== parseInt(match.params.id)) {
                getTweet(match.params.id, { include: 'hashtags,entities' })
            }
        }
    })
)(TweetContainer);