import initFetchTweetsFromTwitter from '../../api/tweets/initFetchTweetsFromTwitter';

import requestFetchFromTwitterApiStart from './requestFetchFromTwitterApiStart';
import requestFetchFromTwitterApiFinish from './requestFetchFromTwitterApiFinish';
import hideFetchModal from './hideFetchModal';

export default function requestFetchFromTwitterApi(params = {}) {
    return async function(dispatch) {

        dispatch(requestFetchFromTwitterApiStart(params));

        setTimeout(() => {
            dispatch(hideFetchModal());
        }, 2000);

        const { status } = await initFetchTweetsFromTwitter(params);

        dispatch(requestFetchFromTwitterApiFinish());
    }
}
