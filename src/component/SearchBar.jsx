import React from 'react';
import { styled } from 'styled-components';

const SearchBar = ({ handleSubmit, value, setValue, placeholder }) => {

    // 검색바 컴포넌트
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <SearchContainer
                type='text'
                name='value'
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
            />
        </form>
    );
};

export default SearchBar;

const SearchContainer = styled.input`
    position: absolute;
    background-color: white;
    border-radius: 0.5rem;
    padding: 0.5rem;
    width: 18rem;

    @media (max-width: 18rem) {
        width: 100%;
    }
`;
