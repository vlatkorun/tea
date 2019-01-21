import React from 'react';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';

const InputText = ({  input, label, meta: { touched, error }, placeholder, autocomplete }) => {
    return (
        <FormGroup>
            {label && <Label for="text">{label}</Label>}
            <Input {...input} type="text" invalid={touched && !!error} placeholder={placeholder} autoComplete={autocomplete}/>
            {touched && ((error && <FormFeedback>{error}</FormFeedback>))}
        </FormGroup>
    )
};

export default InputText;