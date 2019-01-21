import axios from 'axios';

export default async function initFetchTweetsFromTwitter(options = {}) {

    const params = _.pickBy({
        include: options.include || null,
        keyword: options.keyword || null,
        client_id: options.client_id || null,
    }, _.identity);

    const response = await axios.post('/tweets/run', params);

    return !_.isError(response) ? { status: true } : { status: false };
}