import Validator from '../Validator';

class FilterValidator extends Validator {
    rulesDefinition() {
        return {
            text: 'required_without_all:keyword,hashtag',
            keyword: 'required_without_all:text,hashtag',
            hashtag: 'required_without_all:text,keyword',
        };
    }
}

export default FilterValidator;