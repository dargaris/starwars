import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { SideBarData } from './SideNavData';
import './SideNavbar.css';

function SideNavbar() {
	const [sidebar, setSidebar] = useState(false);
	const showSideBar = () => {
		setSidebar(!sidebar);
	};
	return (
		<>
			<div className="navbar">
				<Link to="#" className="menu-bars close">
					{!sidebar && <FaBars onClick={showSideBar} />}
				</Link>
			</div>
			<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
				<ul className="nav-menu-items" onClick={showSideBar}>
					<Link to="#" className="menu-bars open">
						<FaBars onClick={showSideBar} />
					</Link>
					{SideBarData.map((item, index) => {
						return (
							<li key={index} className={item.cName}>
								<Link to={item.path}>
									{item.icon}
									<span>{item.title}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
}

export default SideNavbar;
