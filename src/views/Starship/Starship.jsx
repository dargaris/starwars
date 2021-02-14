import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../AppProvider';
import { Grid } from '@material-ui/core';
import { getStarship } from './StarshipServices';
import MainContent from 'components/SummaryComponents';
import { SET_STARSHIPS } from 'constants/actionTypes';

const Starship = () => {
	const { state, dispatch } = useContext(AppContext);
    const { showSideBar } = state;
    const { starships } = state;
	//const [starship, setStarship] = useState([]);

/* 	useEffect(async () => {
		let response = await getStarship();
		setStarship(response);
    }, []); */

    const deleteObject = (index) => {
		let starshipsSet = [...starships];
		starshipsSet.splice(index, 1);
		dispatch({ type: SET_STARSHIPS, value: starshipsSet });
    };

	return (
		<div className={`contentpanel ${showSideBar ? 'left-spacing' : ''}`}>
			<Grid container spacing={2} padding={2} xs={12}>
				{starships.map((category, index) => MainContent(category, index, deleteObject))}
			</Grid>
		</div>
	);
};

export default Starship;
