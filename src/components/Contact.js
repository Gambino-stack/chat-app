import React from 'react';
import './contact.css';

function Contact(props) {
    return(
        <div className="contact">
            <img className="avatar" src={props.avatar} alt="avatar" />
            <div>
            <h4 className="name">{props.name}</h4>
            <div className="status">
            <ul className={props.online ? "status-online" : "status-offline"}>
                 <li>{props.online ? "online" : "offline"}</li> 
            </ul>  
                </div>
            </div>

        </div>

    );
}

export default Contact;