import React from 'react';
import { styled } from 'styled-components';

export default function Login() {
    return (
        <LoginContainer>
            <InputContainer>
                <input placeholder={'아이디를 입력하세요'} />
                <input placeholder={'비밀번호를 입력하세요'} />
                {/* <LoginButton></LoginButton> */}
            </InputContainer>
        </LoginContainer>
    );
}

const LoginContainer = styled.div`
    background-color: #fef01b;
    height: 100vh;
    display: flex;
    align-items: center;
`;

const InputContainer = styled.div`
    background-color: gray;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const LoginButton = styled.button``;
