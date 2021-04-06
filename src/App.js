import { React, Component } from 'react';
import './App.css';
import MyName from './MyName'
import MyNameFunc from './MyNameFunc'
import Counter from './Counter'
import Say from './Say'
import EventPractice from './EventPractice';
import EvenrtPractice2 from './EvenrtPractice2';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample'
import LifeCycleSample from './LifeCycle/LifeCycleSample';
import ErrorBoundary from './LifeCycle/ErrorBoundary';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
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
      </div>
    );
  }
}

export default App;
