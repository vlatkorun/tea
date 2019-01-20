import Echo from 'laravel-echo';

import { pusher } from '../config';

import channels from './channels';

export function init({ key, cluster, encrypted, store}) {

    const echo = new Echo({
        broadcaster: 'pusher',
        key: key || pusher.key,
        cluster: cluster || pusher.cluster,
        encrypted: encrypted || pusher.encrypted
    });

    if(store) {
        channels.forEach(({ name, events }) => {

            const channel = echo.channel(name);

            events.forEach(({ name, actionCreator }) => {
                channel.listen(name, (event) => {
                    store.dispatch(actionCreator(event));
                })
            });
        })
    }
}