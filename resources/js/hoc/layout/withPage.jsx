import React from 'react';

import Page from '../../components/page/Page';

const withPage = ({ title, breadcrumbItems }) => ContentComponent => {
    return function(props) {
        return (
            <Page title={title} breadcrumbItems={breadcrumbItems}>
                <ContentComponent {...props} />
            </Page>
        )
    }
};

export default withPage;