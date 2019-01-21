import React from 'react';
import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Jumbotron, Button, Container } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import showFetchModal from "../../actionCreators/tweets/showFetchModal";

import fetchTweetsModalVisibilitySelector from "../../selectors/tweets/fetchTweetsModalVisibilitySelector";
import getIsFetchingFromTwitterApiSelector from "../../selectors/tweets/getIsFetchingFromTwitterApiSelector";

const HomeCta = ({ toggle, isFetching }) => (
    <Jumbotron>
        <Container>
            <h1 className="display-3">Demo App</h1>
            <p className="lead">
                This is the demo application for the assignment.
            </p>
            <hr className="my-2" />
            <p>
                Click on the "Start" button bellow to enter a keyword and to fetch tweets from the Twitter API.
            </p>
            <p className="lead">
                { isFetching && (
                    <Button color="primary" onClick={toggle} disabled={true}>
                        <FontAwesomeIcon icon={ faSpinner } spin /> Loading...
                    </Button>
                )}

                { !isFetching && (
                    <Button color="primary" onClick={toggle}>
                        Start
                    </Button>
                )}
            </p>
        </Container>
    </Jumbotron>
);

const mapStateToProps = state => ({
    isOpen: fetchTweetsModalVisibilitySelector(state),
    isFetching: getIsFetchingFromTwitterApiSelector(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    showFetchModal
}, dispatch);

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withProps(({ isOpen, showFetchModal }) => {
        return {
            toggle: () => {
                if(!isOpen) {
                    showFetchModal();
                }
            }
        }
    })
)(HomeCta);