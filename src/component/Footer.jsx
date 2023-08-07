import React, { useState } from 'react';
import {
    IoPerson,
    IoChatbubbleOutline,
    IoEllipsisHorizontalOutline,
    IoChatbubbleSharp,
} from 'react-icons/io5';
import { AiOutlineUser } from 'react-icons/ai';
import { styled } from 'styled-components';
// import { Router, Routes, Route } from 'react-router-dom';
// import Chat from '../pages/Chat';
// import Home from '../pages/Home';

const Footer = ({ label }) => {
    if (label === 'home') {
        return (
            <FooterContainer>
                <IoPerson size={'1.5rem'} />
                <IoChatbubbleOutline size={'1.5rem'} />
                <IoEllipsisHorizontalOutline size={'1.5rem'} />
            </FooterContainer>
        );
    } else if (label === 'chat') {
        return (
            <FooterContainer>
                <AiOutlineUser size={'1.5rem'} />
                <IoChatbubbleSharp size={'1.5rem'} />
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
    border-radius: 0.5rem;
    background-color: #a4a4a4;
    box-shadow: 0px -4px 4px 0px rgba(0, 0, 0, 0.1);
`;
