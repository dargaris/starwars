import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../AppProvider';
import { Grid } from '@material-ui/core';
import { getPlanets } from './PlanetsServices';
import MainContent from 'components/SummaryComponents';

const Planets = () => {
	const { state, dispatch } = useContext(AppContext);
	const { showSideBar } = state;
	const [planets, setPlanets] = useState([]);

	useEffect(async () => {
		let response = await getPlanets();
		setPlanets(response);
	}, []);

	return (
		<div className={`contentpanel ${showSideBar ? 'left-spacing' : ''}`}>
			<Grid container spacing={2} padding={2} xs={12}>
				{planets.map((planet) => MainContent(planet))}
			</Grid>
		</div>
	);
};

export default Planets;
