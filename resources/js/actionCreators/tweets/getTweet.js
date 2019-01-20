import getTweetStart from './getTweetStart';
import getTweetFinish from './getTweetFinish';

import getTweetFromApi from '../../api/tweets/getTweet';

export default function getTweet(id, params = {}) {
    return async function(dispatch) {
        dispatch(getTweetStart());
        const { tweet } = await getTweetFromApi(id, params);
        dispatch(getTweetFinish({ tweet }));
    }
}
