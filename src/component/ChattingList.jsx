import React, { useState } from 'react';
import { styled } from 'styled-components';
import Chat from './Chat';

const ChattingList = ({ chatting_list }) => {
    const [isClickedId, setIsClickedId] = useState();

    const onClick = (id) => {
        setIsClickedId(id);
    };

    return (
        <ChattingListContainer>
            {chatting_list.map((data, index) => (
                <Chat
                    name={data.name}
                    profile={data.profile}
                    id={data.id}
                    date={data.date}
                    lastChat={data.lastChat}
                    unReadCount={data.unReadCount}
                    onClick={() => onClick(data.id)}
                    isClicked={isClickedId === data.id ? true : false}
                />
            ))}
        </ChattingListContainer>
    );
};

export default ChattingList;

const ChattingListContainer = styled.div``;
