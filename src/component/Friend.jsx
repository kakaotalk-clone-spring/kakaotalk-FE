import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useChattingRoom } from '../contexts/ChattingRoomContext';

const Friend = ({ name, profile, id, onClick, isClicked }) => {
    const { handleAddRoom } = useChattingRoom();

    const [isDoubleClicked, setIsDoubleClicked] = useState(false);

    const handleDoubleClick = () => {
        setIsDoubleClicked(true);
        const newChattingRoom = {
            name: `${name}`,
            profile: ' ',
            id: Math.floor(Math.random() * 1000),
        };
        handleAddRoom(newChattingRoom);
    };
    
    return (
        <ProfileContainer
            onClick={onClick}
            isClicked={isClicked}
            onDoubleClick={handleDoubleClick}
        >
            <ProfileImg src={profile} />
            <ProfileName>{name}</ProfileName>
        </ProfileContainer>
    );
};

export default Friend;

const ProfileContainer = styled.div`
    display: flex;
    height: 40px;
    align-items: center;
    margin: 0rem 1rem;
    padding: 0.5rem;
    background-color: ${(props) =>
        props.isClicked ? '#e9e9e9' : 'transparent'};
`;

const ProfileName = styled.p`
    margin: 0 1rem;
`;

const ProfileImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 20px;
`;
