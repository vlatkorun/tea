import { REQUEST_FOR_FETCH_FINISH } from '../../actions/tweets';

export default function requestFetchFromTwitterApiFinish() {
    return {
        type: REQUEST_FOR_FETCH_FINISH
    }
}