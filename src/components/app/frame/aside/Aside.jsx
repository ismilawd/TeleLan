import React, { Component } from "react";
import Menu from './Menu.jsx';

export default class Aside extends Component {
  constructor(props) {
    super(props);
    this.refToggler = React.createRef();
  }
  componentDidMount() {
    this.refToggler.current.addEventListener("click", (e) => {
      if(e.target.parentElement.classList.contains("active")){
        e.target.parentElement.classList.remove("active");
        document.querySelector(".app-container").classList.remove("menu-open");
      }else{
        e.target.parentElement.classList.add("active");
        document.querySelector(".app-container").classList.add("menu-open");
      }
      //route-container
    });
  }
  render() {
    return (
      <>
        <div className='aside'>
          <button className='toggler' ref={this.refToggler}>
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
        <div className='aside-toggle'>
          <div className='header'>
            <div className='title'>Inbox</div>
            <button className='new-chat'>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='user-plus'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 640 512'
                className='svg-inline--fa fa-user-plus fa-w-20'>
                <path
                  fill='#ffffff'
                  d='M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z'
                  className=''></path>
              </svg>
            </button>
          </div>
          <Menu></Menu>
        </div>
      </>
    );
  }
}
