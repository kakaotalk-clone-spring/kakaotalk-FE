import React, { useState } from 'react';
import GroupName from './GroupName';
import { styled } from 'styled-components';
import Friend from './Friend';
import AddFriend from '../mordal/AddFriend';

const FriendList = ({ friend_count, friend_list }) => {
    const [isClickedId, setIsClickedId] = useState();
    const [isDoubleClicked, setIsDoubleClicked] = useState(false);

    const onClick = (id) => {
        setIsClickedId(id);
    };

    const handleDoubleClick = () => {
        setIsDoubleClicked(true);
    };

    return (
        <>
            <FriendInfoContainer>
                <GroupName name={'친구'} />
                <p style={{ margin: '1rem 1rem' }}>{friend_count}</p>
            </FriendInfoContainer>
            <FriendListContainer>
                {friend_list.map((data, index) => (
                    <Friend
                        name={data.name}
                        profile={data.profile}
                        id={data.id}
                        onClick={() => onClick(data.id)}
                        isClicked={isClickedId === data.id ? true : false}
                        onDoubleClick={handleDoubleClick}
                    />
                ))}
            </FriendListContainer>
            {isDoubleClicked && (
                <AddFriend setFriendModalOpen={setIsDoubleClicked} />
            )}
        </>
    );
};

export default FriendList;

const FriendInfoContainer = styled.div`
    display: flex;
    margin: 0 1rem;
`;

const FriendListContainer = styled.div``;
