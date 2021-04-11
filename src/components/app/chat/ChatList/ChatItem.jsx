import React, { Component } from 'react';
const electron = require('electron');
import img from './../../../../img/user.jpg';

export default class ChatItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="chat-item">
                <div className="status online"></div>
                <div className="avatar">
                    <img src={img}></img>
                </div>
                <div className="details">
                    <div className="name">ismilawd</div>
                    <div className="last-message">how are u bith ?</div>
                </div>
                <div className="actions">
                    <div className="menu"></div>
                    <div className="last-seen">12:19AM</div>
                </div>
            </div>
        );
    }
}