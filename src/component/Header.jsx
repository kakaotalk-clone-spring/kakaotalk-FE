import React, { useState, useCallback } from 'react';
import { styled } from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoPersonAdd, IoChatbubbles } from 'react-icons/io5';
import AddFriend from '../mordal/AddFriend';
import SearchFriend from '../mordal/SearchFriend';

const Header = ({ label, icons, friend_list }) => {
    const [friendmodalOpen, setFriendModalOpen] = useState(false);
    const [searchmodalOpen, setSearchModalOpen] = useState(false);

    const handleFriendClick = () => {
        setFriendModalOpen(true);
    };

    const handleSearchClick = () => {
        setSearchModalOpen(true);
    };

    function GetIcon(iconName) {
        const [friendData, setFriendData] = useState(friend_list);

        const handleAddFriend = () => {
            let newFriend = {
                name: '홍창현',
                profile:
                    'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
            };
            setFriendData((prev) => [...prev, newFriend]);
            console.log(friendData);
        };

        // const handleClick = useCallback(
        //     (id) => {
        //         let newFriendData = friendData.filter((data) => data.id !== id);
        //         setFriendData(newFriendData);
        //     },
        //     [friendData]
        // );

        //eslint-disable-next-line default-case
        switch (iconName) {
            case 'search':
                return (
                    <AiOutlineSearch
                        size={'1.5rem'}
                        onClick={() => handleSearchClick()}
                    />
                );
            case 'add-person':
                return (
                    <IoPersonAdd
                        size={'1.5rem'}
                        onClick={() => handleFriendClick()}
                    />
                );
            case 'chat':
                return <IoChatbubbles size={'1.5rem'} />;
        }
    }

    return (
        <HeaderContainer>
            <ItemsGroup>
                <p style={{ fontSize: '1.5rem' }}>{label}</p>
                <IconGroup>
                    {icons.map((item, index) => GetIcon(item))}
                </IconGroup>
                {friendmodalOpen && (
                    <AddFriend setFriendModalOpen={setFriendModalOpen} />
                )}
                {searchmodalOpen && (
                    <SearchFriend setSearchModalOpen={setSearchModalOpen} />
                )}
            </ItemsGroup>
        </HeaderContainer>
    );
};

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
`;

const ItemsGroup = styled.div`
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex: 1;
    display: flex;
    padding: 1rem 1rem;
`;

const IconGroup = styled.div`
    display: flex;
    gap: 0.5rem;
    cursor: pointer;
`;
