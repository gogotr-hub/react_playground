import React, { useReducer } from 'react';
import './useInputs';
import useInputs from './useInputs';

const InfoUseReducer = () => {
    //useReducer - 첫번째 파라메터 : 리듀서 함수
    // 두번째 파라메터 : 해당 리듀서의 기본값
    // state : 현재 가리키는 값
    // dispatch : 액션을 발생시키는 함수
    // ** 장점 : 컴포넌트 업데이트 로직을 컴포넌트 밖으로 뺄수 있다는 것! 
    const [state, onChange] = useInputs({
        name: '',
        nickname: ''
    });
    const { name, nickname } = state;
    return (
        <div>
            <div>
                <input name='name' value={name} onChange={onChange}></input>
                <input name='nickname' value={nickname} onChange={onChange}></input>
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

export default InfoUseReducer;