import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../AppProvider';
import { Grid } from '@material-ui/core';
import { getStarship } from './StarshipServices';
import MainContent from 'components/SummaryComponents';

const Starship = () => {
	const { state, dispatch } = useContext(AppContext);
	const { showSideBar } = state;
	const [starship, setStarship] = useState([]);

	useEffect(async () => {
		let response = await getStarship();
		setStarship(response);
	}, []);

	return (
		<div className={`contentpanel ${showSideBar ? 'left-spacing' : ''}`}>
			<Grid container spacing={2} padding={2} xs={12}>
				{starship.map((category) => MainContent(category))}
			</Grid>
		</div>
	);
};

export default Starship;
