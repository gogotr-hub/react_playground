import { React, Component } from 'react'

class MyName extends Component{
    //default Props
    static defaultProps = {
        name : '기본이름'
    }
    render(){
        return(
            <div>
                안녕하세요 제 이름은 <b>{this.props.name}</b>
            </div>
        );
    }
}

export default MyName;