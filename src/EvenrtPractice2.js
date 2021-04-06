import React, { Component } from 'react';

class EvenrtPractice2 extends Component {

    state = {
        message: ''
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    name="message"
                    placeholder="input message"
                    onChange={(e) => {
                        this.setState({
                            message: e.target.value
                        })
                    }}
                ></input>
                <button
                    onClick={alert(this.state.message)}
                >check</button>
            </div>
        );
    }
}

export default EvenrtPractice2;