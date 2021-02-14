import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../AppProvider';
import { Grid } from '@material-ui/core';
import { getPlanets } from './PlanetsServices';
import MainContent from 'components/SummaryComponents';
import { SET_PLANETS } from 'constants/actionTypes';

const Planets = () => {
	const { state, dispatch } = useContext(AppContext);
    const { showSideBar } = state;
    const { planets } = state;
	//const [planets, setPlanets] = useState([]);

/* 	useEffect(async () => {
		let response = await getPlanets();
		setPlanets(response);
    }, []); */

    const deleteObject = (index) => {
		let planetSet = [...planets];
		planetSet.splice(index, 1);
		dispatch({ type: SET_PLANETS, value: planetSet });
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
