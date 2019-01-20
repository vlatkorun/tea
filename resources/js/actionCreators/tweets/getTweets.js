import getTweetsStart from './getTweetsStart';
import getTweetsFinish from './getTweetsFinish';

import getTweetsFromApi from '../../api/tweets/getTweets';

export default function getTweets(params = {}) {
    return async function(dispatch) {
        dispatch(getTweetsStart());
        const { tweets } = await getTweetsFromApi(params);
        dispatch(getTweetsFinish({ tweets }));
    }
}
