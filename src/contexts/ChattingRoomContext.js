import React, { createContext, useState, useContext, useEffect } from 'react';

const ChattingRoomContext = createContext();

// context API를 이용하여 데이터 저장 및 이용
export const useChattingRoom = () => {
    return useContext(ChattingRoomContext);
};

// 채팅방정보를 현재는 localStorage에 저장
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

    // 채팅방삭제
    const handleDelete = (id) => {
        setChattingRoomList((prevList) =>
            prevList.filter((data) => data.id !== id)
        );
        localStorage.setItem(
            'chattingRoom',
            JSON.stringify(chattingRoom_list.filter((data) => data.id !== id))
        );
    };

    // 채팅방추가
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
