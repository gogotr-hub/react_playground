import React, { useCallback, useMemo, useRef, useState } from 'react';
//useMemo - 함수형 컴포넌트 내부의 연산을 최적화
// 메모이제이션
// 변수, 숫자, 문자열 재사용시 -> useMemo
// 함수 재사용시 -> useCallback

const getAverage = (numbers) => {
    console.log('평균값 계산중...');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
}
const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    //컴포넌트 내부에 있을 경우
    //리렌더링될때 같이 새로 생성됨
    //useCallback 사용
    const onChange = useCallback((e)=>{
        setNumber(e.target.value)
    },[]);//컴포넌트가 처음 렌더링될때 함수 생성

    const onInsert = useCallback((e)=>{
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
        //*************
        //useRef로 ref를 설정하면 useRef로 만든 객체안에 current 값이 실제 엘리먼트를 가리킴
        //************ 
    }, [number, list]);//number, list가 변경되었을떄 생성

    const onDelete = useCallback((value) =>{
        const nextList = list.filter((number) => number !== value);
        setList(nextList);
    },[list])

    const onKeyPress = useCallback((e)=>{
        if(e.key === 'Enter'){
            onInsert();
        }
    },[number]);//number가 변경되었을때 생성

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} onKeyPress={onKeyPress} ref={inputEl}></input>
            <button onClick={onInsert}>등록</button>
            <ul>
                {
                    list.map((value, index) => (<li key={index} onDoubleClick={()=>onDelete(value)}>{value}</li>))
                }
            </ul>
            <div>
                <em>평균값 : {avg}</em>
            </div>
        </div>
    );
};

export default Average;