import React, { Component } from 'react';
import WindowFrame from "./components/app/frame/WindowFrame.jsx";
import ChatList from './components/app/chat/ChatList.jsx';

export default class MainWindow extends Component {
    render() {
        return <>
            <WindowFrame></WindowFrame>
            <div className="app-container">
                <ChatList></ChatList>
            </div>
        </>
    }
}