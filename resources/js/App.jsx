import React from 'react';
import { ConnectedRouter } from 'connected-react-router'

import Routes from './Routes';
import history from "./createHistory";

const App = () => (
    <ConnectedRouter history={history}>
        <Routes />
    </ConnectedRouter>
);

export default App;