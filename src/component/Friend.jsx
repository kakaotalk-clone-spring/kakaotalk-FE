import React, { useState } from 'react';
import { styled } from 'styled-components';

const Friend = ({ name, profile, id, onClick, isClicked, onDoubleClick }) => {
    return (
        <ProfileContainer
            onClick={onClick}
            isClicked={isClicked}
            onDoubleClick={onDoubleClick}
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
