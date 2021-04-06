import { React, Component } from 'react'

class Counter extends Component{
    state = {
        number : 0
    }

    handleInc = () =>{
        this.setState({
            number: this.state.number + 1
        })
    }

    handleDec = () => {
        this.setState((state) => ({
            number: state.number - 1
        }))
    }

    render(){
        return(
            <div>
                <h1> 카 운 터 </h1>
                <div>값 : {this.state.number}</div>
                <button onClick={this.handleInc}> + </button>
                <button onClick={this.handleDec}> - </button>
            </div>
        );
    }
}

export default Counter