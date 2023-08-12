import './App.css';
import styled from 'styled-components';
import Home from './pages/Home';
import { Router, Routes, Route } from 'react-router-dom';
import Chat from './pages/Chat';
import ChattingRoom from './pages/ChattingRoom';
import { HorizonScrallBar } from './component/HorizonScrallBar';
import { useChattingRoom } from './contexts/ChattingRoomContext';
import { useState } from 'react';
import Login from './pages/Login';

function App() {
    const { chattingRoom_list } = useChattingRoom();
    const [isLogined, setIsLogined] = useState(true);

    if (!isLogined) {
        return (
            <RootContainer>
                <OutterContainer>
                    <InnerContainer>
                        <Routes>
                            <Route path='/login' element={<Login />}></Route>
                        </Routes>
                    </InnerContainer>
                </OutterContainer>
            </RootContainer>
        );
    } else {
        return (
            <RootContainer>
                <OutterContainer>
                    {chattingRoom_list.length >= 4 ? (
                        <>
                            <InnerContainer>
                                <Routes>
                                    <Route path='/' element={<Home />}></Route>
                                    <Route
                                        path='/chat'
                                        element={<Chat />}
                                    ></Route>
                                </Routes>
                            </InnerContainer>
                            <HorizonScrallBar>
                                <ChattingContainer>
                                    {chattingRoom_list.map((data, index) => (
                                        <ChattingRoom
                                            key={data.id}
                                            name={data.name}
                                            profile={data.profile}
                                            id={data.id}
                                        />
                                    ))}
                                </ChattingContainer>
                            </HorizonScrallBar>
                        </>
                    ) : (
                        <>
                            <InnerContainer>
                                <Routes>
                                    <Route path='/' element={<Home />}></Route>
                                    <Route
                                        path='/chat'
                                        element={<Chat />}
                                    ></Route>
                                </Routes>
                            </InnerContainer>
                            <ChattingContainer>
                                {chattingRoom_list.map((data, index) => (
                                    <ChattingRoom
                                        key={data.id}
                                        name={data.name}
                                        profile={data.profile}
                                        id={data.id}
                                    />
                                ))}
                            </ChattingContainer>
                        </>
                    )}
                </OutterContainer>
            </RootContainer>
        );
    }
}

export default App;

const RootContainer = styled.div`
    display: flex;
    max-height: 100vh;
    background-color: #e9e9e9;
    flex: 1;
`;

const OutterContainer = styled.div`
    display: flex;
    max-height: 100vh;
    background-color: #e9e9e9;
    justify-content: center;
    margin: 0 auto;
    flex: 1;
`;

const InnerContainer = styled.div`
    max-width: 350px;
    background-color: white;
    margin: 0 1rem 0 0;
    flex: 1;
`;

const ChattingContainer = styled.div`
    display: flex;
    overflow-y: hidden;
    overflow-x: auto;
    padding: 0;
    scroll-behavior: smooth;
`;
