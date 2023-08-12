import React, { useState } from 'react';
import {
    IoPerson,
    IoChatbubbleOutline,
    IoEllipsisHorizontalOutline,
    IoChatbubbleSharp,
} from 'react-icons/io5';
import { AiOutlineUser } from 'react-icons/ai';
import { styled } from 'styled-components';
import Chat from '../pages/Chat';
import Home from '../pages/Home';
import { Link } from 'react-router-dom';

const Footer = ({ label }) => {

    // 친구창화면인지 채팅창화면인지에 따라 Footer 구분 : 설정창도 만들게 된다면 추가예정
    if (label === 'home') {
        return (
            <FooterContainer>
                <LinkIcon to='/'>
                    <IoPerson size={'1.5rem'} />
                </LinkIcon>
                <LinkIcon to='/chat'>
                    <IoChatbubbleOutline size={'1.5rem'} />
                </LinkIcon>
                <IoEllipsisHorizontalOutline size={'1.5rem'} />
            </FooterContainer>
        );
    } else if (label === 'chat') {
        return (
            <FooterContainer>
                <LinkIcon to='/'>
                    <AiOutlineUser size={'1.5rem'} />
                </LinkIcon>
                <LinkIcon to='/chat'>
                    <IoChatbubbleSharp size={'1.5rem'} />
                </LinkIcon>
                <IoEllipsisHorizontalOutline size={'1.5rem'} />
            </FooterContainer>
        );
    }
};

export default Footer;

const FooterContainer = styled.div`
    display: flex;

    bottom: 0;
    height: 20px;
    padding: 0.9375rem 3.75rem;
    justify-content: space-between;
    align-items: center;
    background-color: #a4a4a4;
    box-shadow: 0px -4px 4px 0px rgba(0, 0, 0, 0.1);
`;

const LinkIcon = styled(Link)`
    color: black;
`;
