import Header from '../common/template/header';
import SideBar from '../common/template/sidebar';
import React from "react";
import Footer from '../common/template/footer';
import Messages from '../common/msg/messages';

export default props => (
    <div className="wrapper">
        <Header/>
        <SideBar/>
        <div className='content-wrapper'>
            {props.children}
        </div>
        <Footer/>
        <Messages/>
    </div>
)