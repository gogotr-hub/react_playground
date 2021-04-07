import { React, Component } from 'react';
import './App.css';
import Counter from './Hook/Counter'
import LifeCycleSample from './LifeCycle/LifeCycleSample';
import ErrorBoundary from './LifeCycle/ErrorBoundary';
import Info from './Hook/Info';
import InfoUseReducer from './Hook/InfoUseReducer';
import Average from './Hook/Average';
import SassComponent from './sass/SassComponent';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000',
    visible: false
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    })
  }

  render() {
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'aqua',
      fontSize: '20px'
    }

    return (
      <div style={style}>
        <button onClick={this.handleClick}>랜덤색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color}></LifeCycleSample>
        </ErrorBoundary>
        <Counter></Counter>
        <hr></hr>
        {this.state.visible && <Info></Info>}
        <button onClick={() => { this.setState({ visible: !this.state.visible }) }}>{this.state.visible ? '안보이기' : '보이기'}</button>
        <hr></hr>
        <InfoUseReducer></InfoUseReducer>
        <hr></hr>
        <Average></Average>
        <hr></hr>
        <SassComponent></SassComponent>
      </div>
    );
  }
}

export default App;
