import React, { useContext } from 'react';
import { AppContext } from '../../AppProvider';
import { Grid } from '@material-ui/core';
import MainContent from 'components/SummaryComponents';
import { SET_STARSHIPS, SET_PEOPLE } from 'constants/actionTypes';

const Starship = () => {
	const { state, dispatch } = useContext(AppContext);
    const { showSideBar } = state;
    const { starships, people } = state;

    const deleteObject = (index) => {
        let starshipsSet = [...starships];
        let selfLink = starshipsSet[index].SelfLink;
		starshipsSet.splice(index, 1);
        dispatch({ type: SET_STARSHIPS, value: starshipsSet });
        let peopleNewSet = people.map((person) => {
			let starshipLinks = person?.additionalInfo?.Starship?.filter((spec) => spec !== selfLink);
			return { ...person, additionalInfo: { ...person.additionalInfo, Starship: starshipLinks } };
        });
        dispatch({ type: SET_PEOPLE, value: peopleNewSet });
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
