import axios from 'axios';

export default async function getTweets(options = {}) {

    const params = _.pickBy({
        include: options.include || null,
        text: options.text || null,
        hashtag: options.hashtag || null,
        keyword: options.keyword || null,
    }, _.identity);

    const response = await axios.get('/tweets', { params });

    if(_.isError(response)) {
        return {
            tweets: []
        }
    }

    return {
        tweets: response.data.data || []
    }
}