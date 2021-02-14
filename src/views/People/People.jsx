import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../AppProvider';
import { Grid } from '@material-ui/core';
import { getPeople } from './PeopleServices';
import MainContent from 'components/SummaryComponents';
import { SET_PEOPLE } from 'constants/actionTypes';

const People = () => {
	const { state, dispatch } = useContext(AppContext);
	const { showSideBar } = state;
	const { people } = state;
	//const [people, setPeople] = useState([]);

	const deleteObject = (index) => {
		let peopleSet = [...people];
		peopleSet.splice(index, 1);
		dispatch({ type: SET_PEOPLE, value: peopleSet });
	};

	useEffect(async () => {
		let response = await getPeople();
		//setPeople(response);
		dispatch({ type: SET_PEOPLE, value: response });
	}, []);

	return (
		<div className={`contentpanel ${showSideBar ? 'left-spacing' : ''}`}>
			<Grid container spacing={2} padding={2} xs={12}>
				{people.map((person, index) => MainContent(person, index, deleteObject))}
			</Grid>
		</div>
	);
};

export default People;
