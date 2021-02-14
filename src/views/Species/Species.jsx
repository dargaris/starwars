import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../AppProvider';
import { Grid } from '@material-ui/core';
import { getSpecies } from './SpeciesServices';
import MainContent from 'components/SummaryComponents';
import { SET_SPECIES } from 'constants/actionTypes';

const Species = () => {
	const { state, dispatch } = useContext(AppContext);
    const { showSideBar } = state;
    const { species } = state;
	//const [species, setSpecies] = useState([]);

/* 	useEffect(async () => {
		let response = await getSpecies();
		setSpecies(response);
    }, []); */

    const deleteObject = (index) => {
		let speciesSet = [...species];
		speciesSet.splice(index, 1);
		dispatch({ type: SET_SPECIES, value: speciesSet });
	};

	return (
		<div className={`contentpanel ${showSideBar ? 'left-spacing' : ''}`}>
			<Grid container spacing={2} padding={2} xs={12}>
				{species.map((category, index) => MainContent(category, index, deleteObject))}
			</Grid>
		</div>
	);
};

export default Species;
