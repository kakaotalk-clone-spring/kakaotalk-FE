import React, { useState, useCallback } from 'react';
import { styled } from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import {
    IoPersonAdd,
    IoChatbubbles,
    IoMenuOutline,
    IoCloseSharp,
} from 'react-icons/io5';
import AddFriend from '../mordal/AddFriend';
import SearchFriend from '../mordal/SearchFriend';
import SearchChatRoom from '../mordal/SearchChatRoom';
import SearchWord from '../mordal/SearchWord';
import { useChattingRoom } from '../contexts/ChattingRoomContext';

const Header = ({ label, icons, friend_list, closeFlag, id }) => {
    const { handleDelete } = useChattingRoom();

    const [friendmodalOpen, setFriendModalOpen] = useState(false);
    const [searchmodalOpen, setSearchModalOpen] = useState(false);
    const [chatmodalOpen, setChatModalOpen] = useState(false);
    const [wordmodalOpen, setWordModalOpen] = useState(false);

    const handleFriendClick = () => {
        setFriendModalOpen(true);
    };

    const handleSearchClick = () => {
        setSearchModalOpen(true);
    };

    const handleChatClick = () => {
        setChatModalOpen(true);
    };

    const handleWordClick = () => {
        setWordModalOpen(true);
    };

    function GetIcon(iconName) {
        const [friendData, setFriendData] = useState(friend_list);

        // const handleAddFriend = () => {
        //     let newFriend = {
        //         name: '홍창현',
        //         profile:
        //             'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
        //     };
        //     setFriendData((prev) => [...prev, newFriend]);
        //     console.log(friendData);
        // };

        // const handleClick = useCallback(
        //     (id) => {
        //         let newFriendData = friendData.filter((data) => data.id !== id);
        //         setFriendData(newFriendData);
        //     },
        //     [friendData]
        // );

        //eslint-disable-next-line default-case
        switch (iconName) {
            case 'friend_search':
                return (
                    <AiOutlineSearch
                        size={'1.5rem'}
                        onClick={() => handleSearchClick()}
                    />
                );
            case 'chat_search':
                return (
                    <AiOutlineSearch
                        size={'1.5rem'}
                        onClick={() => handleChatClick()}
                    />
                );
            case 'word_search':
                return (
                    <AiOutlineSearch
                        size={'1.5rem'}
                        // onClick={() => handleWordClick()}
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
            case 'menu':
                return <IoMenuOutline size={'1.5rem'} />;
        }
    }

    return (
        <HeaderContainer>
            <ItemsGroup>
                <CloseGroup>
                    {closeFlag && (
                        <IoCloseSharp
                            style={{ cursor: 'pointer' }}
                            size={'1.5rem'}
                            onClick={() => {
                                handleDelete(id);
                            }}
                        />
                    )}
                    <p style={{ fontSize: '1.5rem' }}>{label}</p>
                </CloseGroup>
                <IconGroup>
                    {icons.map((item, index) => GetIcon(item))}
                </IconGroup>
                {friendmodalOpen && (
                    <AddFriend setFriendModalOpen={setFriendModalOpen} />
                )}
                {searchmodalOpen && (
                    <SearchFriend setSearchModalOpen={setSearchModalOpen} />
                )}
                {chatmodalOpen && (
                    <SearchChatRoom setChatModalOpen={setChatModalOpen} />
                )}
                {wordmodalOpen && (
                    <SearchWord setWordModalOpen={setWordModalOpen} />
                )}
            </ItemsGroup>
        </HeaderContainer>
    );
};

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    height: 4rem;
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

const CloseGroup = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
`;
const IconGroup = styled.div`
    display: flex;
    gap: 0.5rem;
    cursor: pointer;
`;
