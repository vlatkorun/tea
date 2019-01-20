import React from 'react';
import { Button, Form, Row, Col } from 'reactstrap';
import { reduxForm } from 'redux-form';
import { compose, withProps } from 'recompose';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import renderField from '../../hoc/form/renderField';

import FilterValidator from '../../validators/tweets/FilterValidator';

import getTweetsLoadingSelector from '../../selectors/tweets/getTweetsLoadingSelector';

import setFilters from "../../actionCreators/tweets/setFilters";
import getTweets from "../../actionCreators/tweets/getTweets";

const TweetsFilterForm = ({ handleSubmit, fields, isLoadingTweets, clearFilters }) => (
    <Form onSubmit={ handleSubmit }>
        <Row>
            { fields && fields.map((field, index) => (
                <Col xs="12" md="4" key={index}>
                    { renderField(field) }
                </Col>
            )) }
        </Row>
        <Row>
            <Col>
                <Button color={'outline-secondary'} size={'sm'} disabled={isLoadingTweets} className={'mr-2'}>
                    Submit
                </Button>
                <Button color={'outline-secondary'} size={'sm'} disabled={isLoadingTweets} onClick={clearFilters}>
                    Clear
                </Button>
            </Col>
        </Row>
    </Form>
);

const mapStateToProps = state => ({
    isLoadingTweets: getTweetsLoadingSelector(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getTweets,
    setFilters,
}, dispatch);

const validator = new FilterValidator;

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({
        form: 'tweets_filters',
        onSubmit: async(values, dispatch, { setFilters, getTweets }) => {

            const { valid, errors } = await validator.validate(values);

            if(!valid) {
                throw new SubmissionError(errors.reduce((prev, current) => {
                    prev[current.field] = current.message;
                    return prev;
                }, {}))
            }

            setFilters(values);
            getTweets({
                ...values,
                include: 'hashtags,entities',
            });
        }
    }),
    withProps(({ reset, setFilters, getTweets }) => {
        return {
            fields: [
                {
                    name: 'text',
                    id: 'text',
                    type: 'text',
                    label: 'Text',
                    placeholder: 'Tweet text',
                },
                {
                    name: 'keyword',
                    id: 'keyword',
                    type: 'text',
                    label: 'Keyword',
                    placeholder: 'Searched keyword',
                },
                {
                    name: 'hashtag',
                    id: 'hashtag',
                    type: 'text',
                    label: 'Hashtag',
                    placeholder: 'Tweet hashtag',
                },
            ],
            clearFilters: () => {
                reset();
                setFilters();
                getTweets({
                    include: 'hashtags,entities',
                });
            }
        }
    })
)(TweetsFilterForm);