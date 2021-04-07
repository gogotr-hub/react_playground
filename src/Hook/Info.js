import React, { useEffect, useState } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    // useEffect() 렌더링 이후에 발생
    // 2번째 매개변수에 넣는 값만 반영함
    // 빈 배열을 넘길경우 반영하지 않음
    // return 으로 callback - cleanup 가능한 함수를 호출 할 수 있음
    useEffect(() => {
        console.log('rendering end');
        console.log({
            name, nickname
        });
        return () => {
            console.log('cleanUp');
            console.log(name);
        }
    }, [name]);

    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onChangeNickname = e => {
        setNickname(e.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}></input>
                <input value={nickname} onChange={onChangeNickname}></input>
            </div>
            <div>
                <div>
                    <em>이름 : {name}</em>
                </div>
                <div>
                    <em>별명 : {nickname}</em>
                </div>
            </div>
        </div>
    );
};

export default Info;