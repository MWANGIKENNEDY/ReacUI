import React from 'react';

function SideNav(props) {
    return (
        <nav className="sidenav">
            <div className="sidenav-header"></div>
            <div className="sidenav-menu">
<ul>
    <li><a>
    <span class="pi pi-home"></span>
        <span>Home</span></a></li>

        <li><a>
        <span class="pi pi-user"></span>
        <span>Admin</span></a></li>

        <li><a>
        <span class="pi pi-facebook"></span>
        <span>Dashboard</span></a>
        </li>

        <li><a>
        <span class="pi pi-power-off"></span>
        <span>Sign-out</span></a>
        </li>
</ul>
            </div>
        </nav>
    );
}

export default SideNav;