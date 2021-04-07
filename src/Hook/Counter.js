import React, { useReducer } from 'react';


function reducer(state, action){
    switch(action.type){
        case 'INCREMENT':
            return {value: state.value + 1};
        case 'DECREMENT':
            return {value: state.value - 1};
        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {value : 0});
    
    const handleClickInc = () =>{
        dispatch({
            type:'INCREMENT'
        });
    }
    const handleClickDec = () =>{
        dispatch({
            type:'DECREMENT'
        });
    }
    return (
        <div>
            <h1>{state.value}</h1>
            <button onClick={handleClickInc}>+</button>
            <button onClick={handleClickDec}>-</button>
        </div>
    );
};

export default Counter;