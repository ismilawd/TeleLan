import React, { Component } from 'react';

export default class Menu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className="menu-group">
                    <div className="menu-item">
                        <div className="title">All Messages</div>
                        <div className="count">21</div>
                    </div>
                    <div className="menu-item">
                        <div className="title">Unread</div>
                        <div className="count">89</div>
                    </div>
                    <div className="menu-item">
                        <div className="title">Important</div>
                        <div className="count">6</div>
                    </div>
                    <div className="menu-item">
                        <div className="title">Drafts</div>
                        <div className="count">27</div>
                    </div>
                </div>
                <div className="menu-group-splitter"></div>
                <div className="menu-group">
                    <div className="menu-item">
                        <div className="title">Help</div>
                    </div>
                    <div className="menu-item">
                        <div className="title">About</div>
                    </div>
                    <div className="menu-item">
                        <div className="title">Settings</div>
                    </div>
                </div>
            </>
        );
    }
}