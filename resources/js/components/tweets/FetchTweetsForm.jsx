import React from 'react';
import { Button, Form, Row, Col } from 'reactstrap';
import { reduxForm } from 'redux-form';
import { compose, withProps } from 'recompose';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import renderField from '../../hoc/form/renderField';

import FetchTweetsFromTwitterValidator from '../../validators/tweets/FetchTweetsFromTwitterValidator';

import getIsRequestingSelector from '../../selectors/tweets/getIsRequestingSelector';
import getClientIdSelector from '../../selectors/user/getClientIdSelector';

import requestFetchFromTwitterApi from "../../actionCreators/tweets/requestFetchFromTwitterApi";

const FetchTweetsForm = ({ handleSubmit, fields, isRequesting }) => (
    <Form onSubmit={ handleSubmit }>
        <Row>
            { fields && fields.map((field, index) => (
                <Col key={index}>
                    { renderField(field) }
                </Col>
            )) }
        </Row>
        <Row>
            <Col>
                <Button color={'outline-secondary'} size={'sm'} disabled={isRequesting} className={'mr-2'}>
                    Submit
                </Button>
            </Col>
        </Row>
    </Form>
);

const mapStateToProps = state => ({
    isRequesting: getIsRequestingSelector(state),
    clientId: getClientIdSelector(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    requestFetchFromTwitterApi,
}, dispatch);

const validator = new FetchTweetsFromTwitterValidator;

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({
        form: 'fetch_tweets',
        onSubmit: async(values, dispatch, { requestFetchFromTwitterApi, clientId }) => {

            const input = { ...values, client_id: clientId };

            const { valid, errors } = await validator.validate(input);

            if(!valid) {
                throw new SubmissionError(errors.reduce((prev, current) => {
                    prev[current.field] = current.message;
                    return prev;
                }, {}))
            }

            requestFetchFromTwitterApi(input);
        }
    }),
    withProps(() => {
        return {
            fields: [
                {
                    name: 'keyword',
                    id: 'keyword',
                    type: 'text',
                    label: 'Enter Keyword',
                    autocomplete: "off"
                }
            ]
        }
    })
)(FetchTweetsForm);