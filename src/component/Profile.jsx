import React from 'react';
import { styled } from 'styled-components';

const Profile = ({ name, profile }) => {
    return (
        <ProfileContainer>
            <ProfileImg src={profile} />
            <ProfileName>{name}</ProfileName>
        </ProfileContainer>
    );
};

export default Profile;

const ProfileContainer = styled.div`
    display: flex;
    height: 50px;
    align-items: center;
`;

const ProfileName = styled.p`
    margin: 0 1rem;
`;

const ProfileImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 20px;
`;
