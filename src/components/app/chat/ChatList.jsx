import React,{Component} from 'react';
import Search from './ChatList/Search.jsx';
import ChatItem from './ChatList/ChatItem.jsx';

export default class ChatList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="chat-list">
            <Search></Search>
            <ChatItem></ChatItem>
            </div>
        );
    }
}