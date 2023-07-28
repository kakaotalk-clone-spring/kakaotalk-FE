import React from 'react';
import FriendList from '../component/FriendList';
import Banner from '../component/Banner';
import Header from '../component/Header';
import { styled } from 'styled-components';
import Profile from '../component/Profile';
import BorderLine from '../component/BorderLine';
import GroupName from '../component/GroupName';

export default function Home() {
    const my_info = {
        name: '홍창현',
        profile:
            'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
        id: 1,
    };
    const friend_list = [
        {
            name: '홍창현',
            profile:
                'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
            id: 2,
        },
        {
            name: '홍창현',
            profile:
                'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
            id: 3,
        },
        {
            name: '홍창현',
            profile:
                'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
            id: 4,
        },
    ];

    const friend_count = friend_list.length;

    return (
        <HomeContainer>
            <Header
                label={'친구'}
                icons={['search', 'add-person']}
                friend_list={friend_list}
            />
            <Banner />
            <MyProfile>
                <GroupName name={'나'} />
                <Profile name={my_info.name} profile={my_info.profile} />
            </MyProfile>
            <BorderLine />
            <FriendList friend_count={friend_count} friend_list={friend_list} />
        </HomeContainer>
    );
}

const HomeContainer = styled.div`
    width: 500px;

    @media (max-width: 500px) {
        width: 100%;
    }
`;

const MyProfile = styled.div`
    margin: 1rem;
`;
