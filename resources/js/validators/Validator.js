import { validateAll } from 'indicative';

class Validator {

    constructor(rules, messages) {

        this.rules = {};
        this.input = {};
        this.notice = 'Validation failed';

        this.messages = {
            required: 'Field is required',
            required_if: 'Field is required',
            accepted: 'Field is required',
        };

        if(_.isPlainObject(rules) && !_.isEmpty(rules)) {
            this.rules = rules;
        }

        if(_.isPlainObject(messages) && !_.isEmpty(messages)) {
            this.messages = messages;
        }
    }

    getRules() {

        let tempRules = this.rules;

        const instanceDefinedRules = this.rulesDefinition();

        if(_.isPlainObject(instanceDefinedRules) && !_.isEmpty(instanceDefinedRules)) {
            tempRules = _.merge(tempRules, instanceDefinedRules);
        }

        return tempRules;
    }

    getMessages() {

        let tempMessages = this.messages;

        const instanceDefinedMessages = this.messagesDefinition();

        if(_.isPlainObject(instanceDefinedMessages) && !_.isEmpty(instanceDefinedMessages)) {
            tempMessages = _.merge(tempMessages, instanceDefinedMessages);
        }

        return tempMessages;
    }

    rulesDefinition()
    {}

    messagesDefinition()
    {}

    getNotice() {
        return this.notice;
    }

    async validate(input) {

        this.input = input;

        try {

            return {
                valid: true,
                params: await validateAll(input, this.getRules(), this.getMessages())
            }

        } catch (errors) {

            return {
                valid: false,
                errors: errors,
                message: this.getNotice(),
            }
        }
    }
}

export default Validator;