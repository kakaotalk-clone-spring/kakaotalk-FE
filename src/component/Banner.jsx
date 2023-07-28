import React from 'react';
import { styled } from 'styled-components';

const Banner = ({ img }) => {
    return <BannerContainer>{img}</BannerContainer>;
};

export default Banner;

const BannerContainer = styled.div`
    height: 6.5rem;
    margin: 1rem;
    border-radius: 0.5rem;
    background-color: black;
`;
