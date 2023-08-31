import React, { useRef, useState } from 'react';
import useOnClickOutside from '../hooks/useOnClickOutside';
import './AddFriend.css';
import { styled } from 'styled-components';
import SearchBar from '../component/SearchBar';
import axios from "../api/axios"

export default function AddFriend({ title, name, setFriendModalOpen }) {
    // 친구추가모달 : 내용추가필요
    const ref = useRef();
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setValue('');
    };
    useOnClickOutside(ref, () => {
        setFriendModalOpen(false);
    });

    return (
        <div className='presentation'>
            <div className='wrapper-modal'>
                <div className='modal' ref={ref}>
                    <div className='modal__content'>
                        <SearchNavigator>
                            <p className='modal__details'>친구추가</p>
                            <span
                                onClick={() => setFriendModalOpen(false)}
                                className='modal-close'
                            >
                                취소
                            </span>
                        </SearchNavigator>
                        <SearchBar
                            value={value}
                            setValue={setValue}
                            type='text'
                            placeholder='아이디를 검색해주세요'
                            onSubmit={handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

const SearchNavigator = styled.div`
    justify-content: center;
`;
