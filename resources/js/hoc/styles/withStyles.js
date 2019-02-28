import React from 'react';
import styled from 'styled-components';

export default function withStyles(styles) {
    return function(Component) {
        return styled(Component)(styles);
    }
}