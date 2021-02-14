import React, { useEffect, useState, useContext } from 'react';
import CustomCard from 'components/Card';
import { AppContext } from '../../AppProvider';
import { Grid } from '@material-ui/core';
import { getPlanets } from './PlanetsServices';

const Planets = () => {
	const { state, dispatch } = useContext(AppContext);
	const { showSideBar } = state;
	const [planets, setPlanets] = useState([]);

	useEffect(async () => {
		let response = await getPlanets();
		setPlanets(response);
	}, []);

	const EachKeyItem = (key, item) => {
		return (
			item && (
				<Grid item xs={6}>
					<Grid container>
						<Grid item xs={7} style={{ fontSize: 'small', fontWeight: 600 }}>
							{key}
						</Grid>
						<Grid item xs={5}>
							{item}
						</Grid>
					</Grid>
				</Grid>
			)
		);
	};

	const GridItem = (row) => {
		return (
			<Grid item xs={12} sm={12} md={6} lg={4}>
				<CustomCard name={row?.Name}>
					<Grid container spacing={1}>
						{Object.keys(row?.info)?.map((key) => EachKeyItem(key, row.info[key]))}
					</Grid>
				</CustomCard>
			</Grid>
		);
	};

	return (
		<div className={`contentpanel ${showSideBar ? 'left-spacing' : ''}`}>
			<Grid container spacing={2} padding={2} xs={12}>
				{planets.map((planet) => GridItem(planet))}
			</Grid>
		</div>
	);
};

export default Planets;
