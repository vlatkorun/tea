import Echo from 'laravel-echo';
import { pusher as pusherConfig } from '../config';

window.Pusher = require('pusher-js');
Pusher.logToConsole = pusherConfig.logToConsole;

import channels from './channels';

export function init({ key, cluster, encrypted, store }) {

    window.Echo = new Echo({
        broadcaster: 'pusher',
        key: key || pusherConfig.key,
        cluster: cluster || pusherConfig.cluster,
        encrypted: encrypted || pusherConfig.encrypted,
    });

    if(store) {
        channels.forEach(({ name, events }) => {
            events.forEach((event) => {
                window.Echo.listen(name, `.${event.name}`, (data) => {

                    const currentState = store.getState();

                    if(data.client_id && currentState.user.client_id && data.client_id === currentState.user.client_id) {
                        store.dispatch(event.actionCreator(data));
                    }
                });
            });
        });
    }
}