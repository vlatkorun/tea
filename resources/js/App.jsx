import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import Routes from './Routes';
import history from "./createHistory";

import setClientId from "./actionCreators/user/setClientId";

const App = () => (
    <ConnectedRouter history={history}>
        <Routes />
    </ConnectedRouter>
);

const mapDispatchToProps = dispatch => bindActionCreators({
    setClientId
}, dispatch);

export default compose(
    connect(null, mapDispatchToProps),
    lifecycle({
        componentDidMount() {

            let clientId = document.head.querySelector('meta[name="client_id"]');

            if(clientId) {
                this.props.setClientId(clientId.content);
            }
        }
    })
)(App);