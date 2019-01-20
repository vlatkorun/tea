import React from 'react';

const withLayout = LayoutComponent => ContentComponent => {
    return function() {
        return (
            <LayoutComponent>
                <ContentComponent />
            </LayoutComponent>
        )
    }
};

export default withLayout;