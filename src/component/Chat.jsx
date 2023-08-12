import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useChattingRoom } from '../contexts/ChattingRoomContext';

const Chat = ({
    name,
    profile,
    id,
    date,
    lastChat,
    unReadCount,
    onClick,
    isClicked,
}) => {
    const { handleAddRoom } = useChattingRoom();

    const [isDoubleClicked, setIsDoubleClicked] = useState(false);

    const handleDoubleClick = () => {
        setIsDoubleClicked(true);
        const newChattingRoom = {
            name: name,
            profile: profile,
            id: Math.floor(Math.random() * 1000),
        };
        handleAddRoom(newChattingRoom);
    };

    const UnReadCountCheck = () => {
        if (unReadCount > 99) {
            return '99+';
        } else if (unReadCount > 0) {
            return unReadCount;
        }
    };

    return (
        <ProfileContainer
            onClick={onClick}
            isClicked={isClicked}
            onDoubleClick={handleDoubleClick}
        >
            <ProfileImg src={profile} />
            <ChatContainer>
                <TextContainer>
                    <ProfileName>{name}</ProfileName>
                    <LastChatBox>{lastChat}</LastChatBox>
                </TextContainer>
                <OtherContainer>
                    <LastTime>{date}</LastTime>
                    <UnReadBox>
                        {unReadCount !== 0 && (
                            <UnReadCount>{UnReadCountCheck()}</UnReadCount>
                        )}
                    </UnReadBox>
                </OtherContainer>
            </ChatContainer>
        </ProfileContainer>
    );
};

export default Chat;

const ProfileContainer = styled.div`
    display: flex;
    height: 50px;
    margin: 0rem 1rem;
    padding: 0.5rem;
    background-color: ${(props) =>
        props.isClicked ? '#e9e9e9' : 'transparent'};
`;

const ProfileImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 1rem;
`;

const ProfileName = styled.span`
    margin: 0 0.5rem;
`;

const ChatContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: top;
    width: 100%;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
`;

const OtherContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    text-align: right;
    width: 20%;
`;

const LastTime = styled.span`
    color: #acacac;
    font-size: 0.5rem;
    font-weight: 100;
`;

const LastChatBox = styled.span`
    font-size: 0.8rem;
    color: gray;
    margin: 0 0.5rem;
`;

const UnReadBox = styled.span``;

const UnReadCount = styled.span`
    color: white;
    font-size: 0.8rem;
    background-color: #f7570b;
    border-radius: 0.5rem;
    padding: 0 0.25rem;
`;
