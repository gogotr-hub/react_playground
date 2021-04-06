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

class App extends Component {

  render() {
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'aqua',
      fontSize: '20px'
    }

    return (
      <div style={style}>
        {/* <MyName name="장"></MyName>
        <MyName></MyName>
        <MyNameFunc name="func"></MyNameFunc>
        <br/>
        <Counter></Counter>
        <Say></Say>
        <EventPractice></EventPractice>
        <EvenrtPractice2></EvenrtPractice2> */}
        <ValidationSample></ValidationSample>
        <ScrollBox ref={(ref) => this.ScrollBox = ref}></ScrollBox>
        <button onClick={() => this.ScrollBox.scrollToBottom()}>맨 밑으로</button>
        <IterationSample></IterationSample>
      </div>
    );
  }
}

export default App;
