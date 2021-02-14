import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { SideBarData } from './SideNavData';
import TopNavBar from '../TopNavBar';
import './SideNavbar.css';
import { AppContext } from '../../AppProvider';
import { TOGGLE_SIDEBAR, SET_SIDE_NAV } from '../../constants/actionTypes';

function SideNavbar() {
	const { state, dispatch } = React.useContext(AppContext);
	//const [sidebar, setSidebar] = useState(false);
	const { showSideBar } = state;
	const toggleSideBar = () => {
		//setSidebar(!sidebar);
		dispatch({ type: TOGGLE_SIDEBAR, value: !showSideBar });
	};
	const setSideNav = (value) => {
		dispatch({ type: SET_SIDE_NAV, value });
	};
	return (
		<>
			<div className="navbar">
				<Link to="#" className="menu-bars close">
					{!showSideBar && <FaBars onClick={toggleSideBar} />}
				</Link>
				<div className="appTitle">STAR WARS</div>
			</div>
			<nav className={showSideBar ? 'nav-menu active' : 'nav-menu'}>
				<ul className="nav-menu-items">
					<Link to="#" className="menu-bars open">
						<FaBars onClick={toggleSideBar} />
					</Link>
					{SideBarData.map((item, index) => {
						return (
							<li key={index} className={item.cName}>
								<Link to={item.path} onClick={() => setSideNav(item.path)}>
									{item.icon}
									<span>{item.title}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
			<div className={`nav-wrapper ${showSideBar ? 'leftSpacing':''}`}>
				<TopNavBar />
			</div>
		</>
	);
}

export default SideNavbar;
