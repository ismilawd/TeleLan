import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Message from './Message.jsx';
import InputEmoji from 'react-input-emoji';

export default class MessagePanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            messages: []
        }
    }
    setText(text) {
        this.setState({
            text: text
        });
    }
    handleOnEnter() {
        this.sendMessage();
    }
    sendMessage() {
        /**
         * @type {HTMLDivElement}
         */
        let input = document.querySelector(".react-input-emoji--input");
        let html = input.innerHTML;
        let date = new Date();
        let s = `${date.getHours()}:${date.getMinutes()}`
        this.setState({
            messages: [{
                time: s,
                text: html
            }, ...this.state.messages],
            text: ''
        }, () => input.innerHTML = "")
    }
    render() {
        return (
            <div
                className="message-panel">
                <div className="header">
                    <div className="title">
                        <b>Milad</b> is typing...
                        </div>
                    <div className="important">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#81868b" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                    </div>
                    <div className="call">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#81868b" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg>
                    </div>
                </div>
                <Scrollbars className="messaging-area">
                    {
                        this.state.messages.map((message, index) => <Message key={index} time={message.time}>{message.text}</Message>)
                    }
                </Scrollbars>
                <div className="text-area">
                    <div className="attachment">
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="paperclip" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#888d91" d="M67.508 468.467c-58.005-58.013-58.016-151.92 0-209.943l225.011-225.04c44.643-44.645 117.279-44.645 161.92 0 44.743 44.749 44.753 117.186 0 161.944l-189.465 189.49c-31.41 31.413-82.518 31.412-113.926.001-31.479-31.482-31.49-82.453 0-113.944L311.51 110.491c4.687-4.687 12.286-4.687 16.972 0l16.967 16.971c4.685 4.686 4.685 12.283 0 16.969L184.983 304.917c-12.724 12.724-12.73 33.328 0 46.058 12.696 12.697 33.356 12.699 46.054-.001l189.465-189.489c25.987-25.989 25.994-68.06.001-94.056-25.931-25.934-68.119-25.932-94.049 0l-225.01 225.039c-39.249 39.252-39.258 102.795-.001 142.057 39.285 39.29 102.885 39.287 142.162-.028A739446.174 739446.174 0 0 1 439.497 238.49c4.686-4.687 12.282-4.684 16.969.004l16.967 16.971c4.685 4.686 4.689 12.279.004 16.965a755654.128 755654.128 0 0 0-195.881 195.996c-58.034 58.092-152.004 58.093-210.048.041z"></path></svg>
                    </div>
                    <InputEmoji
                        keepOpenend={true}
                        value={this.state.text}
                        onChange={this.setText.bind(this)}
                        cleanOnEnter
                        onEnter={this.handleOnEnter.bind(this)}
                        placeholder="Type your message..."
                    />
                    <div className="send" onClick={this.sendMessage.bind(this)}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#888d91" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path></svg>
                    </div>
                </div>
            </div>
        )
    }
}