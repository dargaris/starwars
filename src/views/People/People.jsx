import React, { useContext } from 'react';
import { AppContext } from '../../AppProvider';
import { Grid } from '@material-ui/core';
import MainContent from 'components/SummaryComponents';
import { SET_PEOPLE, SET_PLANETS, SET_VEHICLES, SET_STARSHIPS, SET_SPECIES } from 'constants/actionTypes';

const People = () => {
	const { state, dispatch } = useContext(AppContext);
	const { showSideBar } = state;
	const { people, species, planets, starships, vehicles } = state;

	const deleteObject = (index) => {
        let peopleSet = [...people];
        let selfLink = peopleSet[index].SelfLink;
		peopleSet.splice(index, 1);
        dispatch({ type: SET_PEOPLE, value: peopleSet });
        let planetsNewSet = planets.map((planet) => {
			let peopleLinks = planet?.additionalInfo?.Residents?.filter((person) => person !== selfLink);
			return { ...planet, additionalInfo: { ...planet.additionalInfo, Residents: peopleLinks } };
		});
        dispatch({ type: SET_PLANETS, value: planetsNewSet });
        let speciesNewSet = species.map((spec) => {
			let peopleLinks = spec?.additionalInfo?.People?.filter((person) => person !== selfLink);
			return { ...spec, additionalInfo: { ...spec.additionalInfo, People: peopleLinks } };
		});
        dispatch({ type: SET_SPECIES, value: speciesNewSet });
        let starshipsNewSet = starships.map((starship) => {
			let peopleLinks = starship?.additionalInfo?.Pilots?.filter((person) => person !== selfLink);
			return { ...starship, additionalInfo: { ...starship.additionalInfo, Pilots: peopleLinks } };
		});
        dispatch({ type: SET_STARSHIPS, value: starshipsNewSet });
        let vehiclesNewSet = vehicles.map((vehicle) => {
			let peopleLinks = vehicle?.additionalInfo?.Pilots?.filter((person) => person !== selfLink);
			return { ...vehicle, additionalInfo: { ...vehicle.additionalInfo, Pilots: peopleLinks } };
		});
		dispatch({ type: SET_VEHICLES, value: vehiclesNewSet });
	};

	return (
		<div className={`contentpanel ${showSideBar ? 'left-spacing' : ''}`}>
			<Grid container spacing={2} padding={2} xs={12}>
				{people.map((person, index) => MainContent(person, index, deleteObject))}
			</Grid>
		</div>
	);
};

export default People;
