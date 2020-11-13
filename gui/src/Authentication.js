import React from 'react'
import {  StarOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import "./authentication.css";
import WaitList from './components/waitlist/waitlist.component';

function Authentication() {
    return (
        <div className="authentication">
            <div className="logo">
                <Link to="/" style={{textDecoration: "None"}}>
                    <span className="header_logo_name">
                        <StarOutlined className="header_logo_icon" style={{ color: "rgb(93, 188, 210)", fontSize: 30 }} />
                        ROA</span>
                </Link>
            </div>
            <div className="frame_content">
                <div className="content">
                    <span>JOIN</span>
                    <h1>Enter Email to continue.</h1>
                </div>
                <div className="input_email">
                    <WaitList />
                    {/* <input className="Enter_email" placeholder="Email" type="text" />
                    <div className="btn">
                        <button id="b1" style={{ marginRight: 30 }} type="submit">continue</button>
                        <button id="b2" type="submit">Signin with Google</button>
                    </div> */}
                </div>
                
                <Link to="/about" style={{textDecoration: "None", color: "inherit" }}>
                    <div className="about">
                        <span>
                            What is it?
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Authentication
