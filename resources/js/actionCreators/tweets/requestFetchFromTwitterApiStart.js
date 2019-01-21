import { REQUEST_FOR_FETCH_START } from '../../actions/tweets';

export default function requestFetchFromTwitterApiStart(params = {}) {
    return {
        type: REQUEST_FOR_FETCH_START,
        payload: {
            keyword: params.keyword || null
        }
    }
}