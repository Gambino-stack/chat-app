import React from 'react';
import './contact.css';

const isOnline = true;
function Contact() {
    return(
        <div className="contact">
            <img className="avatar" src="https://randomuser.me/api/portraits/women/74.jpg" alt="avatar" />
            <div>
            <h4 className="name">Louise dupas</h4>
            <div className="status">
            {isOnline ?<ul className="status-online">
                 <li>En ligne</li> 
            </ul> : 
            <ul className="status-offline">
                <li>Hors-ligne</li>
                </ul>}
                </div>
            </div>

        </div>

    );
}

export default Contact;