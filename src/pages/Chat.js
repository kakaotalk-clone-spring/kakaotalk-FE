import React from 'react';
import Friend from '../component/Friend';
import Banner from '../component/Banner';
import Header from '../component/Header';
import { styled } from 'styled-components';

export default function Chat() {
    return (
        <HomeContainer>
            <Header label={'채팅'} icons={['search', 'chat']} />
            <Banner />
            <Friend></Friend>
        </HomeContainer>
    );
}

const HomeContainer = styled.div`
    /* display: flex;
    width: 22.5rem;
    flex-direction: column; */
`;
