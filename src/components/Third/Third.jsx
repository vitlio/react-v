import React from 'react';
import style from './third.module.css';

class Third extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: 'Hello, world'
        };
        this.handleValue = this.handleValue.bind(this);
    }
    handleValue(event){
       this.setState({text: event.target.value});
    }
    render(){
        return(
            <div className={style.wrapper}>
                <h1>{this.state.text}</h1>
                {/* <input type='text' value={this.state.text} onChange={e => this.handleValue(e)} /> */}
            </div>
        );
    }
}

export default Third;