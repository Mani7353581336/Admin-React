import React from 'react';
import "./topbar.css"

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span className="logo">Manipaladmin</span>
                </div>
                <div className='topRight'>
                    <div className="topbarIconContainer">
                        <i class="bi bi-bell"></i>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <i class="bi bi-globe"></i>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <i class="bi bi-gear-fill"></i>
                    </div>
                    <img src="https://celebritybiobook.com/wp-content/uploads/2022/02/Radhika-Pandit-7.jpg" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
