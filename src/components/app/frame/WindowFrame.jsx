import React, { Component } from 'react';
import Aside from './aside/Aside.jsx';

var electron = require('electron');

var remote = electron.remote;
var BrowserWindow = remote.BrowserWindow;

export default class WindowFrame extends Component {
    constructor(props) {
        super(props);
        this.refTitleBar = React.createRef();
        this.refButtonClose = React.createRef();
        this.refButtonMaximize = React.createRef();
        this.refButtonMinimize = React.createRef();
    }
    componentDidMount() {
        window.addEventListener("mousemove", (e) => {
            if (e.clientY < 60) {
                if (!this.refTitleBar.current.classList.contains("show"))
                    this.refTitleBar.current.classList.add("show");
            }
            else {
                if (this.refTitleBar.current.classList.contains("show"))
                    this.refTitleBar.current.classList.remove("show");
            }
        });
        this.refButtonClose.current.addEventListener("click", () => {
            BrowserWindow.getFocusedWindow().close();
        });
        this.refButtonMaximize.current.addEventListener("click", () => {
            let win = BrowserWindow.getFocusedWindow();
            if (win.isMaximized())
                win.unmaximize();
            else
                win.maximize();
        });
        this.refButtonMinimize.current.addEventListener("click", () => {
            BrowserWindow.getFocusedWindow().minimize();
        });
    }
    render() {
        return (
            <>
            <div className="title-bar" ref={this.refTitleBar}>
                <div className="buttons">
                    <div className="button button-close" ref={this.refButtonClose}></div>
                    <div className="button button-maximize" ref={this.refButtonMaximize}></div>
                    <div className="button button-minimize" ref={this.refButtonMinimize}></div>
                </div>
            </div>
            <Aside></Aside>
            </>
        );
    }
}