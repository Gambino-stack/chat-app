import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            online: this.props.online
        };
    }
    render(){
        return(
            <div className="contact">
                <img className="avatar" src={this.props.avatar} alt="avatar" />
                <div>
                <h4 className="name">{this.props.name}</h4>
                <div className="status" onClick={event => {
                    const isOnline = !this.state.online;
                    this.setState({online: isOnline});
                }}>
                <ul className={this.state.online ? "status-online" : "status-offline"}>
                    <li>{this.state.online ? "online" : "offline"}</li> 
                </ul>  
                    </div>
                </div>

            </div>
        );
    }
}

export default Contact;