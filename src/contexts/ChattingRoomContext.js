import React, { createContext, useState, useContext, useEffect } from 'react';

const ChattingRoomContext = createContext();

export const useChattingRoom = () => {
    return useContext(ChattingRoomContext);
};

const initialRoom = localStorage.getItem('chattingRoom')
    ? JSON.parse(localStorage.getItem('chattingRoom'))
    : [];

const ChattingRoomProvider = ({ children }) => {
    const [chattingRoom_list, setChattingRoomList] = useState(
        () => JSON.parse(localStorage.getItem('chattingRoom')) || initialRoom
    );

    useEffect(() => {
        localStorage.setItem('chattingRoom', JSON.stringify(chattingRoom_list));
    }, [chattingRoom_list]);

    const handleDelete = (id) => {
        setChattingRoomList((prevList) =>
            prevList.filter((data) => data.id !== id)
        );
        localStorage.setItem(
            'chattingRoom',
            JSON.stringify(chattingRoom_list.filter((data) => data.id !== id))
        );
    };

    const handleAddRoom = (newChattingRoom) => {
        setChattingRoomList((prevList) =>
            prevList.filter((room) => room.name !== newChattingRoom.name)
        );
        setChattingRoomList((prevList) => [newChattingRoom, ...prevList]);
    };

    return (
        <ChattingRoomContext.Provider
            value={{
                chattingRoom_list,
                handleDelete,
                handleAddRoom,
            }}
        >
            {children}
        </ChattingRoomContext.Provider>
    );
};

export default ChattingRoomProvider;
