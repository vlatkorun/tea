import React from 'react';
import {compose, lifecycle, withProps } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Button, ButtonToolbar, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import Main from '../layouts/Main';
import withLayout from '../hoc/layout/withLayout';

import TweetsTableContainer from './TweetsTableContainer';
import getTweets from "../actionCreators/tweets/getTweets";

import TweetsFilterContainer from './TweetsFilterContainer';
import FetchTweetsModalContainer from './FetchTweetsModalContainer';

import getTweetsSelector from '../selectors/tweets/getTweetsSelector';
import getIsFetchingFromTwitterApiSelector from "../selectors/tweets/getIsFetchingFromTwitterApiSelector";
import fetchTweetsModalVisibilitySelector from "../selectors/tweets/fetchTweetsModalVisibilitySelector";

import showFetchModal from "../actionCreators/tweets/showFetchModal";

const TweetsContainer = ({ getTweets, isFetching, toggle }) => (
    <Container>
        <div className={'d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center mt-4 mb-3'}>
            <h1>
                Tweets
            </h1>
            <ButtonToolbar>

                { isFetching && (
                    <Button className={'mr-3'} color={'outline-secondary'} size={'sm'} disabled={true} onClick={toggle}>
                        <FontAwesomeIcon icon={ faSpinner } spin /> Fetching from API...
                    </Button>
                )}

                { !isFetching && (
                    <Button className={'mr-3'} color={'outline-secondary'} size={'sm'} onClick={toggle}>
                        Fetch from API
                    </Button>
                )}

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
        <FetchTweetsModalContainer />
    </Container>
);

const mapStateToProps = state => ({
    tweets: getTweetsSelector(state),
    isFetching: getIsFetchingFromTwitterApiSelector(state),
    isOpen: fetchTweetsModalVisibilitySelector(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getTweets,
    showFetchModal,
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
    }),
    withProps(({ isOpen, showFetchModal }) => {
        return {
            toggle: () => {
                if(!isOpen) {
                    showFetchModal();
                }
            }
        }
    })
)(TweetsContainer);

