import React from 'react';
import { styled } from 'styled-components';
import { AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai';
import { IoMenuOutline, IoHappyOutline } from 'react-icons/io5';
import Header from '../component/Header';

const ChattingRoom = ({ name, profile, id, handleDelete }) => {
    return (
        <ChattingRoomContainer>
            <Header
                label={name}
                icons={['word_search', 'menu']}
                closeFlag={true}
                id={id}
                handleDelete={handleDelete}
            />
            <ContentContainer />
            <InputContainer>
                <InputBox></InputBox>
                <SendContainer>
                    <IconGroup>
                        <AiOutlinePlus
                            style={{ cursor: 'pointer' }}
                            size={'1.5rem'}
                        />
                        <IoHappyOutline
                            style={{ cursor: 'pointer' }}
                            size={'1.5rem'}
                        />
                    </IconGroup>
                    <SendBox>전송</SendBox>
                </SendContainer>
            </InputContainer>
        </ChattingRoomContainer>
    );
};

export default ChattingRoom;

const ChattingRoomContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 100vh;
    background-color: skyblue;
    margin: 0 1rem 0 0;
    border-radius: 1rem;
`;

const ContentContainer = styled.div`
    background-color: skyblue;
    flex: 1;
`;

const InputContainer = styled.div`
    padding: 0.625rem;
    display: flex;
    flex-direction: column;
    background-color: white;
    bottom: 0;
    height: 10rem;
`;

const InputBox = styled.input`
    background-color: #f2f2f2;
    height: 6rem;
    border: none;
    outline: none;
    padding: 1rem;
`;

const SendContainer = styled.div`
    display: flex;
    height: 4rem;
    margin: 0.5rem 0 0 0;
    justify-content: space-between;
    align-items: center;
`;

const IconGroup = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    align-items: center;
`;

const SendBox = styled.div`
    background-color: #fef01b;
    padding: 0.5rem 1rem;
`;
