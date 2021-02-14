import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../AppProvider';
import { Grid } from '@material-ui/core';
import { getVehicles } from './VehicleServices';
import MainContent from 'components/SummaryComponents';

const Vehicles = () => {
	const { state, dispatch } = useContext(AppContext);
	const { showSideBar } = state;
	const [vehicles, setVehicles] = useState([]);

	useEffect(async () => {
		let response = await getVehicles();
		setVehicles(response);
	}, []);

	return (
		<div className={`contentpanel ${showSideBar ? 'left-spacing' : ''}`}>
			<Grid container spacing={2} padding={2} xs={12}>
				{vehicles.map((vehicle) => MainContent(vehicle))}
			</Grid>
		</div>
	);
};

export default Vehicles;
