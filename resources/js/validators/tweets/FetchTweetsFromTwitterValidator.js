import Validator from '../Validator';

class FetchTweetsFromTwitterValidator extends Validator {
    rulesDefinition() {
        return {
            keyword: 'required',
            client_id: 'required',
        };
    }
}

export default FetchTweetsFromTwitterValidator;