import axios from 'axios';

export default async function reset(options = {}) {

    const params = _.pickBy({
        // include: options.include || null
    }, _.identity);

    const response = await axios.post('/app/reset', { params });

    return !_.isError(response) ? { status: true } : { status: false };
}