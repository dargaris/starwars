import React, { useContext } from 'react';
import { AppContext } from '../../AppProvider';
import { Grid } from '@material-ui/core';
import MainContent from 'components/SummaryComponents';
import { SET_SPECIES, SET_PEOPLE, SET_PLANETS } from 'constants/actionTypes';

const Species = () => {
	const { state, dispatch } = useContext(AppContext);
	const { showSideBar } = state;
	const { species, people, planets } = state;

	const deleteObject = (index) => {
		let speciesSet = [...species];
		let selfLink = speciesSet[index].SelfLink;
		speciesSet.splice(index, 1);
		dispatch({ type: SET_SPECIES, value: speciesSet });
		let peopleNewSet = people.map((person) => {
			let speciesLinks = person?.additionalInfo?.Species?.filter((spec) => spec !== selfLink);
			return { ...person, additionalInfo: { ...person.additionalInfo, Species: speciesLinks } };
        });
        dispatch({ type: SET_PEOPLE, value: peopleNewSet });
		let planetsNewSet = planets.map((category) => {
			let speciesLinks = category?.additionalInfo?.Species?.filter((spec) => spec !== selfLink);
			return { ...category, additionalInfo: { ...category.additionalInfo, Species: speciesLinks } };
		});
		dispatch({ type: SET_PLANETS, value: planetsNewSet });
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
