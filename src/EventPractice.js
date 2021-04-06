import React, { useState } from 'react';

const EventPractice = () => {
    const [message, setMessage] = useState('');
    const [username, setName] = useState('');

    const handleChange = (e) =>{
        setMessage(e.target.value);
    };

    const handleClick = () => {
        alert(message);
        setMessage('');
    };

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="이름을 입력해주세요"
                value={username}
                onChange={handleChange}
            >
            </input>
            <button
                onClick={handleClick}
            >이름 확인</button>
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해보세요"
                value={message}
                onChange={handleChange}
            ></input>
            <button
                onClick={handleClick}
            >메세지 확인</button>
        </div>
    );
};

export default EventPractice;