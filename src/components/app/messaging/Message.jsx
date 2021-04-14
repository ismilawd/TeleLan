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
                        {this.props.time}
                    </div>
                </div>
                <div className="text" dangerouslySetInnerHTML={{__html:this.props.children}}>
                </div>
            </div>
        );
    }
}