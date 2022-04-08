import React from 'react';
import { Link } from 'react-router-dom';
import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/"  className='link'>
                        <li className="sidebarListItem active">
                            <i class="bi bi-border-style"  ></i>Home
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <i className="sidebarIcon" class="bi bi-graph-up"></i>Analytics
                        </li>
                        <li className="sidebarListItem">
                            <i className="sidebarIcon" class="bi bi-graph-up-arrow"></i>Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to ="/users" className='link'>
                        <li className="sidebarListItem">
                            <i className="sidebarIcon" class="bi bi-person"></i>  Users
                        </li>
                        </Link>
                        <Link to ="/products" className='link'>
                        <li className="sidebarListItem">

                            <i className="sidebarIcon" class="bi bi-easel3"></i>  Products
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <i className="sidebarIcon" class="bi bi-currency-dollar"></i>Transaction
                        </li>
                        <li className="sidebarListItem">
                            <i className="sidebarIcon" class="bi bi-incognito"></i>Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <i className="sidebarIcon" class="bi bi-envelope"></i>Mail
                        </li>
                        <li className="sidebarListItem">
                            <i className="sidebarIcon" class="bi bi-rss"></i>Feedback
                        </li>
                        <li className="sidebarListItem">
                            <i className="sidebarIcon" class="bi bi-chat-left"></i>Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <i className="sidebarIcon" class="bi bi-kanban"></i>Manage
                        </li>
                        <li className="sidebarListItem">
                            <i className="sidebarIcon" class="bi bi-graph-up"></i>Analytics
                        </li>
                        <li className="sidebarListItem">
                            <i className="sidebarIcon" class="bi bi-graph-up-arrow"></i>Reports
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    )
}
