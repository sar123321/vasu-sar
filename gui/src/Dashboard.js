import React from 'react'
import "./dashboard.css"
import Activity from "./Activity";

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="dashboard_sider">
                <div class="sidenav">
                    <div className="options"><span>Dashboard</span></div>
                    <div className="options"><span>News</span></div>
                    <div className="options"><span>Message</span></div>
                    <div className="options"><span>Account</span></div>
                    <div className="options"><span>Setting</span></div>
                </div>
                
            </div>

            <div className="dashboard_content">
                <div className="Content">
                    <span>
                        Overview
                    </span>
                </div>
                <div className="Content">
                    <span>
                        $1256.42
                    </span>
                </div>
            </div>

            <div className="right_content">
                <div className="Activity">
                    <span>model</span>

                </div>
                    <Activity />
            </div>
        </div>
    )
}

export default Dashboard
