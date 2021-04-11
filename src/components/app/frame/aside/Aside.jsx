import React,{Component} from 'react';

export default class Aside extends Component{
    constructor(props){
        super(props);
        this.refToggler=React.createRef();
    }
    componentDidMount(){
        this.refToggler.current.addEventListener("click",(e)=>{
            e.target.parentElement.classList.toggle("active");
        });
    }
    render(){
        return(
            <>
                <div className="aside">
                    <button className="toggler" ref={this.refToggler}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                </div>
                <div className="aside-toggle">

                </div>
            </>
        );
    }
}
