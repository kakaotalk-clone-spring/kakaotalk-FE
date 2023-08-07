import React from 'react';
import FriendList from '../component/FriendList';
import Banner from '../component/Banner';
import Header from '../component/Header';
import { styled } from 'styled-components';
import Profile from '../component/Profile';
import BorderLine from '../component/BorderLine';
import GroupName from '../component/GroupName';
import Footer from '../component/Footer';

export default function Home() {
    const my_info = {
        name: '홍창현',
        profile:
            'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
        id: 1,
    };
    const friend_list = [
        {
            name: '사람1',
            profile:
                'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
            id: 1,
        },
        {
            name: '사람2',
            profile:
                'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
            id: 2,
        },
        {
            name: '사람3',
            profile:
                'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
            id: 3,
        },
        {
            name: '사람4',
            profile:
                'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
            id: 4,
        },
        {
            name: '사람5',
            profile:
                'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
            id: 5,
        },
        {
            name: '사람6',
            profile:
                'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
            id: 6,
        },
        {
            name: '사람7',
            profile:
                'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
            id: 7,
        },
        {
            name: '사람8',
            profile:
                'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
            id: 8,
        },
    ];

    const friend_count = friend_list.length;

    return (
        <>
            <HomeContainer>
                <Header
                    label={'친구'}
                    icons={['friend_search', 'add-person']}
                    friend_list={friend_list}
                />
                <ContentWrapper>
                    <Banner />
                    <MyProfile>
                        <GroupName name={'나'} />
                        <Profile
                            name={my_info.name}
                            profile={my_info.profile}
                        />
                    </MyProfile>
                    <BorderLine />
                    <FriendList
                        friend_count={friend_count}
                        friend_list={friend_list}
                    />
                </ContentWrapper>
                <Footer label={'home'} />
            </HomeContainer>
        </>
    );
}

const HomeContainer = styled.div`
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
    overflow-y: auto;
    scroll-behavior: smooth;

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

const MyProfile = styled.div`
    margin: 1rem;
`;
