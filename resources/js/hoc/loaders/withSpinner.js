import React from 'react';

const withSpinner = LayoutComponent => ContentComponent => {
    return function() {
        return (
            <LayoutComponent>
                <ContentComponent />
            </LayoutComponent>
        )
    }
};

export default withSpinner;