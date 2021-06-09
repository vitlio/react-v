import React from 'react'
import './modal.css'

export default class Modal extends React.Component{
    state = {
        isOpen: false
    }
    render(){
        return (
            <React.Fragment>
                <button onClick={() => this.setState({isOpen: true})}>Open modal</button>
            {this.state.isOpen && 
                (<div className="modal" onClick={ (e) => { if(e.target.className !== "modal-body"&& e.target.className === "modal") this.setState({isOpen: false})} }  >
                    <div className="modal-body">
                        <h2>Modal title</h2>
                        <p>I`m awesome modal!</p>
                        <button onClick={() => this.setState({isOpen: false})}>Close modal</button>
                    </div>
                </div>)  
            }

            </React.Fragment>
        )
    }
}