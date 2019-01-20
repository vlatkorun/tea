import React from 'react';
import { Spinner as BaseSpinner } from 'reactstrap';

const Spinner = () => (
    <div className={'text-center'}>
        <BaseSpinner color="dark" />
    </div>
);

export default Spinner;