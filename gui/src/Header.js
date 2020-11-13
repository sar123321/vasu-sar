import React from 'react';
import "./header.css";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SearchIcon from '@material-ui/icons/Search';
import {  StarOutlined} from '@ant-design/icons';
function Header() {
    return (
        <div className="header">
            <div className="header_logo">
                <StarOutlined className="header_logo_icon" style={{ color: "#736D6C", fontSize: 30 }} />
                <span className="header_logo_name">ROA</span>
                <AccountCircleOutlinedIcon className="user_icon" style={{ color: "#736D6C", fontSize: 34 }} />
                <div className="header_username">    
                    <span className="username"> Aman </span>
                </div>    
            </div>
            <div className="Right_content">
            <div className="header_search">
                <input  className="header_searchinput" type="text" />
                <SearchIcon className="search_icon" style={{ color: "#736D6C" , fontSize: 30}} />
            </div>  
            </div>
            
        </div>
    )
}

export default Header
