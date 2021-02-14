import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../AppProvider';
import { Grid } from '@material-ui/core';
import { getPeople } from './PeopleServices';
import MainContent from 'components/SummaryComponents';

const People = () => {
	const { state, dispatch } = useContext(AppContext);
	const { showSideBar } = state;
	const [people, setPeople] = useState([]);

	useEffect(async () => {
		let response = await getPeople();
		setPeople(response);
	}, []);

	return (
		<div className={`contentpanel ${showSideBar ? 'left-spacing' : ''}`}>
			<Grid container spacing={2} padding={2} xs={12}>
				{people.map((person) => MainContent(person))}
			</Grid>
		</div>
	);
};

export default People;
