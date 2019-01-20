import axios from 'axios';

export default async function getTweet(id, options = {}) {

    const params = _.pickBy({
        include: options.include || null
    }, _.identity);

    const response = await axios.get('/tweets/' + id, { params });

    if(_.isError(response)) {
        return {
            tweet: null
        }
    }

    return {
        tweet: response.data.data || null
    }
}