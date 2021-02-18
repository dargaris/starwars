import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Button from '@material-ui/core/Button';

import { SideBarData } from './SideNavData';
import TopNavBar from '../TopNavBar';
import './SideNavbar.css';
import { AppContext } from '../../AppProvider';
import { TOGGLE_SIDEBAR, SET_SIDE_NAV } from '../../constants/actionTypes';
import { makeStyles } from '@material-ui/core/styles';
//services
import { getPlanets } from 'views/Planets/PlanetsServices';
import { getPeople } from 'views/People/PeopleServices';
import { getStarship } from 'views/Starship/StarshipServices';
import { getVehicles } from 'views/Vehicle/VehicleServices';
import { getSpecies } from 'views/Species/SpeciesServices';

const useStyles = makeStyles({
	button: {
		marginRight: '250px',
	},
});

function SideNavbar() {
	const { state, dispatch } = React.useContext(AppContext);
	const classes = useStyles();
	const [reset, setReset] = useState(true);
	const { showSideBar } = state;
	const toggleSideBar = () => {
		//setSidebar(!sidebar);
		dispatch({ type: TOGGLE_SIDEBAR, value: !showSideBar });
	};
	const setSideNav = (value) => {
		dispatch({ type: SET_SIDE_NAV, value });
	};

	useEffect(() => {
		getPeople(dispatch);
		getPlanets(dispatch);
		getStarship(dispatch);
		getSpecies(dispatch);
		getVehicles(dispatch);
		setReset(false);
	}, [reset]);

	return (
		<>
			<div className="navbar">
				<Link to="#" className="menu-bars close">
					{!showSideBar && <FaBars onClick={toggleSideBar} color="#3f51b5" />}
				</Link>
				<div className={`app-title ${showSideBar ? 'left-spacing' : ''}`}>STAR WARS</div>
			</div>
			<nav className={showSideBar ? 'nav-menu active' : 'nav-menu'}>
				<ul className="nav-menu-items">
					<Link to="#" className="menu-bars open">
						<FaBars onClick={toggleSideBar} color="#3f51b5" />
					</Link>
					{SideBarData.map((item, index) => {
						return (
							<li key={index} className={item.cName} onClick={toggleSideBar}>
								<Link to={item.path} onClick={() => setSideNav(item.path)}>
									{item.icon}
									<span>{item.title}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
			<div className={`nav-wrapper ${showSideBar ? 'left-spacing' : ''}`}>
				<TopNavBar />
				<Button
					variant="contained"
					color="primary"
					className={showSideBar ? classes.button : ''}
					onClick={() => setReset(true)}
				>
					Reset
				</Button>
			</div>
		</>
	);
}

export default SideNavbar;
