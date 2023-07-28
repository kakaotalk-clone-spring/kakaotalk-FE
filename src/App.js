import './App.css';
import styled from 'styled-components';
import Home from './pages/Home';
import { Router, Routes, Route } from 'react-router-dom';
import Chat from './pages/Chat';

function App() {
    return (
        <RootContainer>
            <InnerContainer>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/chat' element={<Chat />}></Route>
                </Routes>
            </InnerContainer>
        </RootContainer>
    );
}

export default App;

const RootContainer = styled.div`
    display: flex;
    min-height: 100vh;
    background-color: #e9e9e9;
    flex: 1;
`;

const InnerContainer = styled.div`
    max-width: 500px;
    background-color: white;
    margin: 0 auto;
    flex: 1;
`;
