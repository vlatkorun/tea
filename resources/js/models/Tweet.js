import moment from 'moment';

export default class Tweet {
    constructor(params) {

        const {
            id,
            twitter_id,
            twitter_created_at,
            keyword,
            created_at,
            hashtags,
            entities,
            text,
        } = params;

        this.id = id || null;
        this.text = text || null;
        this.twitter_id = twitter_id || null;
        this.twitter_created_at = twitter_created_at || null;
        this.keyword = keyword || null;
        this.created_at = created_at || null;
        this.hashtags = hashtags || [];
        this.entities = entities || [];
    }
}