import React from 'react';

function Topnav(props) {
    return (
        <nav className="topnav">

            <div className="topnav-logo">
                <span class="pi pi-bars"></span>
                <span><h2>Dashboard</h2></span>
            </div>

            <div className="topnav-search"></div>

            <div className="topnav-user"></div>

        </nav>
    );
}

export default Topnav;