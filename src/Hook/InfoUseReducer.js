import React, { useReducer } from 'react';

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    };
}

const InfoUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    });

    const { name, nickname } = state;

    const onChange = (e) => {
        dispatch(e.target);
    }
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