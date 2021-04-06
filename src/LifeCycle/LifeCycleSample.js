import React, { Component } from 'react';

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null
    }
    myRef = null;

    constructor(props) {
        super(props);
        console.log('constructor');
    }
    static getDrivedStateFromProps(nextProps, preveState) {
        //컴포넌트가 마운트 될떄, 업데이트 될떄 호출됨
        //props로 받아온 값을 state에 동기화 할떄
        console.log('getDrivedStateFromProps');
        if (nextProps.color !== preveState.color) {
            return { color: nextProps.color };
        }
        return null;
    }

    componentDidMount() {
        //컴포넌트를 만들고 첫 렌더링을 모두 마친뒤 실행됨
        //setTimeout, setInterval, 네트워크요청등 비동기 작업을 처리
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        //props, state가 변경 되었을때 리렌더링 여부를 묻는다. return true/false
        console.log('shouldComponentUpdate', nextProps, nextState);
        return nextState.number % 10 !== 4;
    }
    componentWillMount() {
        //컴포넌트를 DOM에서 제거할떄
        console.log('componenetWillMount');
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        //실제로 브라우저 반영 직전, 업데이트하기 직전의 값을 참조한다
        console.log('getSnapshotBeforUpdate');
        if (prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //리렌더링을 완료한뒤 실행, 업데이트가 끝난 직후
        console.log('componentDidUpdate', prevProps, prevState);
        if (snapshot) {
            console.log('업데이트 되기 직전 색상:', snapshot);
        }
    }

    render() {
        const style = {
            color: this.props.color
        }

        return (
            <div>
                <h1 style={style} ref={ref => this.myRef = ref}>{this.state.number}</h1>
                <p> color : {this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        );
    }
}

export default LifeCycleSample;