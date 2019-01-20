import React from 'react';
import { Field } from 'redux-form'

import InputText from '../../components/form/InputText';

const renderField = (field) => {

    if(field.type === 'text') {
        return <Field component={ InputText } {...field} />
    }

    return null;
};

export default renderField;