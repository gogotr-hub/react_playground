import React, { useMemo, useState } from 'react';
//useMemo - 함수형 컴포넌트 내부의 연산을 최적화
// 메모이제이션

const getAverage = (numbers) => {
    console.log('평균값 계산중...');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
}
const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = (e) => {
        setNumber(e.target.value);
    }

    const onInsert = (e) => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    }
    const onDelete = (value) =>{
        const nextList = list.filter((number) => number !== value);
        setList(nextList);
    }
    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onInsert();
        }
    }
    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} onKeyPress={onKeyPress}></input>
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