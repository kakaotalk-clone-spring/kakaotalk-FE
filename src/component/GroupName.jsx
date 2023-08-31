import React from 'react';

const GroupName = ({ name }) => {
    // 친구창화면인지 채팅창화면인지 이름설정하는 컴포넌트
    return <div style={{ margin: '1rem 0' }}>{name}</div>;
};

export default GroupName;
