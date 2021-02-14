import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { SET_TOP_NAV } from '../../constants/actionTypes';
import { AppContext } from '../../AppProvider';
import { TopNavData } from './TopNavData';

export default function TopNavBar(props) {
	const { state, dispatch } = React.useContext(AppContext);
	const { sideNavPick, showSideBar } = state;
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
		dispatch({ type: SET_TOP_NAV, value: newValue });
	};

	return (
		<Tabs
			value={value}
			indicatorColor="primary"
			textColor="primary"
			onChange={handleChange}
		>
			<Link to={`${sideNavPick}`} style={{ textDecoration: 'none' }}>
				<Tab label="Summary" textColor="primary" />
			</Link>
			<Link to={`${sideNavPick}/${TopNavData[1]}`} style={{ textDecoration: 'none' }}>
				<Tab label="Comparison" textColor="primary" />
			</Link>
		</Tabs>
	);
}
