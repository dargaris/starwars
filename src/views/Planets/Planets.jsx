import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../AppProvider';
import { Grid } from '@material-ui/core';
import { getPlanets } from './PlanetsServices';
import MainContent from 'components/SummaryComponents';
import { SET_PLANETS, SET_PEOPLE, SET_SPECIES } from 'constants/actionTypes';

const Planets = () => {
	const { state, dispatch } = useContext(AppContext);
	const { showSideBar } = state;
	const { planets, people, species } = state;

	/* delete a planet and remove references from people and species */

	const deleteObject = (index) => {
		let planetSet = [...planets];
		let selfLink = planetSet[index].SelfLink;
		let peopleNewSet = people.map((person) => {
			let homeLinks = person?.additionalInfo?.HomeWorld?.filter((home) => home !== selfLink);
			return { ...person, additionalInfo: { ...person.additionalInfo, HomeWorld: homeLinks } };
		});
		let speciesNewSet = species.map((category) => {
			let homeLinks = category?.additionalInfo?.HomeWorld?.filter((home) => home !== selfLink);
			return { ...category, additionalInfo: { ...category.additionalInfo, HomeWorld: homeLinks } };
		});
		planetSet.splice(index, 1);
		dispatch({ type: SET_PLANETS, value: planetSet });
		dispatch({ type: SET_PEOPLE, value: peopleNewSet });
		dispatch({ type: SET_SPECIES, value: speciesNewSet });
	};

	return (
		<div className={`contentpanel ${showSideBar ? 'left-spacing' : ''}`}>
			<Grid container spacing={2} padding={2} xs={12}>
				{planets.map((planet, index) => MainContent(planet, index, deleteObject))}
			</Grid>
		</div>
	);
};

export default Planets;
