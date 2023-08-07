import React from 'react';
import HorizontalScroll from 'react-scroll-horizontal';
import { styled } from 'styled-components';

export const HorizonScrallBar = React.memo(({ children }) => {
    return (
        <HorizontalScroll>
            <ScrollBarContainer>{children}</ScrollBarContainer>
        </HorizontalScroll>
    );
});

const ScrollBarContainer = styled.div`
    grid-template-rows: auto auto;
    grid-auto-flow: column;
`;
