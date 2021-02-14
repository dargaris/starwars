import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../AppProvider';
import { Grid } from '@material-ui/core';
import { getSpecies } from './SpeciesServices';
import MainContent from 'components/SummaryComponents';

const Species = () => {
	const { state, dispatch } = useContext(AppContext);
	const { showSideBar } = state;
	const [species, setSpecies] = useState([]);

	useEffect(async () => {
		let response = await getSpecies();
		setSpecies(response);
	}, []);

	return (
		<div className={`contentpanel ${showSideBar ? 'left-spacing' : ''}`}>
			<Grid container spacing={2} padding={2} xs={12}>
				{species.map((category, index) => MainContent(category, index))}
			</Grid>
		</div>
	);
};

export default Species;
