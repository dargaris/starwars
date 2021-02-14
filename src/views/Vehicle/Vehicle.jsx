import React, { useContext } from 'react';
import { AppContext } from '../../AppProvider';
import { Grid } from '@material-ui/core';
import MainContent from 'components/SummaryComponents';
import { SET_VEHICLES, SET_PEOPLE } from 'constants/actionTypes';

const Vehicles = () => {
	const { state, dispatch } = useContext(AppContext);
    const { showSideBar } = state;
    const { vehicles, people } = state;

    const deleteObject = (index) => {
        let vehiclesSet = [...vehicles];
        let selfLink = vehiclesSet[index].SelfLink;
		vehiclesSet.splice(index, 1);
        dispatch({ type: SET_VEHICLES, value: vehiclesSet });
        let peopleNewSet = people.map((person) => {
			let vehicleLinks = person?.additionalInfo?.Vehicles?.filter((spec) => spec !== selfLink);
			return { ...person, additionalInfo: { ...person.additionalInfo, Vehicles: vehicleLinks } };
        });
        dispatch({ type: SET_PEOPLE, value: peopleNewSet });
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
