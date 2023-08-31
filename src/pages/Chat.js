import React from 'react';
import Banner from '../component/Banner';
import Header from '../component/Header';
import { styled } from 'styled-components';
import Footer from '../component/Footer';
import ChattingList from '../component/ChattingList';

export default function Chat() {
    // 채팅리스트 mock data
    const chatting_list = [
        {
            name: '사람1',
            profile:
                'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
            id: 1,
            date: '오후 4:37',
            lastChat: '안녕하세요',
            unReadCount: 4,
        },
        {
            name: '사람2',
            profile:
                'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
            id: 2,
            date: '오후 11:30',
            lastChat: '반갑습니다',
            unReadCount: 73,
        },
        {
            name: '사람3',
            profile:
                'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
            id: 3,
            date: '오전 1:24',
            lastChat: '뭐해',
            unReadCount: 293,
        },
        {
            name: '사람4',
            profile:
                'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
            id: 4,
            date: '오전 12:24',
            lastChat: 'ㅎㅇㅎㅇ',
            unReadCount: 13,
        },
        {
            name: '사람5',
            profile:
                'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
            id: 5,
            date: '오전 7:07',
            lastChat: 'ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ',
            unReadCount: 0,
        },
        {
            name: '사람6',
            profile:
                'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
            id: 6,
            date: '오후 7:07',
            lastChat: 'ㅎㅇ요',
            unReadCount: 1,
        },
    ];

    return (
        <>
            <ChatContainer>
                <Header label={'채팅'} icons={['chat_search', 'chat']} />
                <ContentWrapper>
                    <Banner />
                    <ChattingList chatting_list={chatting_list} />
                </ContentWrapper>
                <Footer label={'chat'} />
            </ChatContainer>
        </>
    );
}

const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 350px;

    @media (max-width: 350px) {
        width: 100%;
    }
`;

const ContentWrapper = styled.div`
    flex: 1;
    overflow-y: hidden;
    scroll-behavior: smooth;

    &:hover {
        overflow-y: auto;
    }

    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: gray;
        border-radius: 1rem;
    }
    &::-webkit-scrollbar-track {
        background-color: white;
    }
`;
