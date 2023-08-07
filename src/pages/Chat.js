import React from 'react';
import Friend from '../component/Friend';
import Banner from '../component/Banner';
import Header from '../component/Header';
import { styled } from 'styled-components';
import Footer from '../component/Footer';

export default function Chat() {
    return (
        <>
            <HomeContainer>
                <ContentWrapper>
                    <Header label={'채팅'} icons={['chat_search', 'chat']} />
                    <Banner />
                    <Friend></Friend>
                </ContentWrapper>
                <Footer label={'chat'} />
            </HomeContainer>
        </>
    );
}

const HomeContainer = styled.div`
    /* display: flex;
    width: 22.5rem;
    flex-direction: column; */
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const ContentWrapper = styled.div`
    flex: 1;
`;
