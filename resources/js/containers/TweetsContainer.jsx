import React from 'react';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Button, ButtonToolbar, Row, Col } from 'reactstrap';

import Main from '../layouts/Main';
import withLayout from '../hoc/layout/withLayout';

import TweetsTableContainer from './TweetsTableContainer';
import getTweets from "../actionCreators/tweets/getTweets";

import TweetsFilterContainer from './TweetsFilterContainer';

import getTweetsSelector from '../selectors/tweets/getTweetsSelector';

const TweetsContainer = ({ getTweets }) => (
    <Container>
        <div className={'d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center mt-4 mb-3'}>
            <h1>
                Tweets
            </h1>
            <ButtonToolbar>
                <Button className={'mr-3'} color={'outline-secondary'} size={'sm'}>
                    Fetch from API
                </Button>
                <Button color={'outline-secondary'} onClick={() => getTweets({ include: 'hashtags,entities'})} size={'sm'}>
                    Refresh
                </Button>
            </ButtonToolbar>
        </div>
        <Row className={'mb-4'}>
            <Col>
                <TweetsFilterContainer  />
            </Col>
        </Row>
        <TweetsTableContainer />
    </Container>
);

const mapStateToProps = state => ({
    tweets: getTweetsSelector(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getTweets
}, dispatch);

export default compose(
    withLayout(Main),
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
        componentDidMount() {

            const {
                tweets,
                getTweets,
            } = this.props;

            if(!tweets.length) {
                getTweets({ include: 'hashtags,entities' })
            }
        }
    })
)(TweetsContainer);

