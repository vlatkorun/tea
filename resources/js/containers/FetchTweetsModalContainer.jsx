import React from 'react';
import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import FetchTweetsModal from "../components/tweets/FetchTweetsModal";

import fetchTweetsModalVisibilitySelector from "../selectors/tweets/fetchTweetsModalVisibilitySelector";

import hideFetchModal from "../actionCreators/tweets/hideFetchModal";

const FetchTweetsModalContainer = ({ isOpen, toggle }) => (
    <FetchTweetsModal isOpen={isOpen} toggle={toggle} />
);

const mapStateToProps = state => ({
    isOpen: fetchTweetsModalVisibilitySelector(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    hideFetchModal
}, dispatch);

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withProps(({ hideFetchModal }) => {
        return {
            toggle: () => {
                hideFetchModal();
            }
        }
    })
)(FetchTweetsModalContainer);