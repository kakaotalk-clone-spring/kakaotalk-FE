import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useChattingRoom } from '../contexts/ChattingRoomContext';
import ProfileModal from '../mordal/ProfileModal';
import axios from '../api/axios';
import requests from '../api/requests';

const Friend = ({ name, profile, id, onClick, isClicked }) => {
    const { handleAddRoom } = useChattingRoom();

    // 더블클릭시에 채팅방생성
    const [isDoubleClicked, setIsDoubleClicked] = useState(false);
    const [profilemodalOpen, setProfileModalOpen] = useState(false);

    const handleDoubleClick = () => {
        setIsDoubleClicked(true);
        const newChattingRoom = {
            name: `${name}`,
            profile: profile,
            id: Math.floor(Math.random() * 1000),
        };
        handleAddRoom(newChattingRoom);
    };

    const handleProfileClick = () => {
        setProfileModalOpen(true);
    };

    const handleFriendProfile = async () => {
        try {
            const response = await axios.get(
                `${requests.fetchFriendProfile}${name}`,
                {
                    params: { friend_id: `${name}` },
                }
            );

            if (response.data.isSuccess) {
                console.log('친구상세조회 성공');
            } else {
                console.log('친구상세조회 실패:', response.data.message);
            }
        } catch (error) {
            console.error('친구상세조회 오류:', error);
        }
    };

    return (
        <ProfileContainer
            onClick={onClick}
            isClicked={isClicked}
            onDoubleClick={handleDoubleClick}
        >
            <ProfileImg
                src={profile}
                onClick={() => {
                    handleProfileClick();
                    handleFriendProfile();
                }}
            />
            {profilemodalOpen && (
                <ProfileModal
                    profile={profile}
                    name={name}
                    setProfileModalOpen={setProfileModalOpen}
                />
            )}
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
    cursor: pointer;
`;
