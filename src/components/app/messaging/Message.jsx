import React,{ Component } from "react";
import img from '../../../img/user.jpg';

export default class Message extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={`message${this.props.me===true ?' me':''}${this.props.system===true ? ' system':''}`}>
                <div className="avatar">
                    <img src={img} />
                    <div className="time">
                        19:59
                    </div>
                </div>
                <div className="text">
                    Hello bitch
                </div>
            </div>
        );
    }
}