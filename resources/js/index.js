import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import './bootstrap';
import App from './App';

import configureStore from './configureStore';
import configureAxios from './configureAxios';

import { init } from './websocket';

const store = configureStore();

configureAxios({ store });

init({ store });

const root = document.getElementById('root');

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        root,
    );
};

render(App);

if(module.hot) {
    module.hot.accept('./App', () => { render(App); });
}