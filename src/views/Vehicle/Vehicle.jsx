import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../AppProvider';
import { Grid } from '@material-ui/core';
import { getVehicles } from './VehicleServices';
import MainContent from 'components/SummaryComponents';
import { SET_VEHICLES } from 'constants/actionTypes';

const Vehicles = () => {
	const { state, dispatch } = useContext(AppContext);
    const { showSideBar } = state;
    const { vehicles } = state;
	//const [vehicles, setVehicles] = useState([]);

/* 	useEffect(async () => {
		let response = await getVehicles();
		setVehicles(response);
    }, []); */

    const deleteObject = (index) => {
		let vehiclesSet = [...vehicles];
		vehiclesSet.splice(index, 1);
		dispatch({ type: SET_VEHICLES, value: vehiclesSet });
    };

	return (
		<div className={`contentpanel ${showSideBar ? 'left-spacing' : ''}`}>
			<Grid container spacing={2} padding={2} xs={12}>
				{vehicles.map((vehicle, index) => MainContent(vehicle, index, deleteObject))}
			</Grid>
		</div>
	);
};

export default Vehicles;
