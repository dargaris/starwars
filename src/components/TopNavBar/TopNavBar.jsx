import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { SET_TOP_NAV } from '../../constants/actionTypes';
import { AppContext } from '../../AppProvider';
import { TopNavData } from './TopNavData';

export default function TopNavBar(props) {
	const { state, dispatch } = React.useContext(AppContext);
	const { sideNavPick } = state;
	const [value, setValue] = React.useState(0);
	const history = useHistory();
	const location = useLocation();

	const handleChange = (event, newValue) => {
		if(value!==newValue) {
			console.log(location.prev)
		setValue(newValue);
		dispatch({ type: SET_TOP_NAV, value: newValue });
		if (newValue === 1) history.push(`${sideNavPick}/${TopNavData[1]}`);
		else history.goBack();
		}
	};

	useEffect(() => {
		dispatch({ type: SET_TOP_NAV, value: 0 });
		setValue(0);
	}, [sideNavPick]);

	return (
		<Tabs value={value} indicatorColor="primary" textColor="primary" onChange={handleChange}>
			<Tab label="Summary" textColor="primary" />
			<Tab label="Comparison" textColor="primary" />
		</Tabs>
	);
}
