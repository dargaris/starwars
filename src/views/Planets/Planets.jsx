import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import CustomCard from 'components/Card';
import { AppContext } from '../../AppProvider';
import { Grid, Box } from '@material-ui/core';
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

	const AdditionalInfoRow = (key, item) => {
        const temp = item[0]?.split('/');
        const navItem = temp?.[temp?.length-3];
		return (
			<Grid item xs={6}>
				<Box item xs={4} style={{ fontSize: 'small', fontWeight: 600 }}>
					{key}
				</Box>
				<Box item xs={8}>
					<Grid container>
						{item?.map((value) => (
							<Grid item xs={12}>
								<Link to={navItem}>{value}</Link>
							</Grid>
						))}
					</Grid>
				</Box>
			</Grid>
		);
	};

	const AdditionalInfo = (addInfoRows) => {
		return (
			<Grid container spacing={2}>
				{Object.keys(addInfoRows).map((key) => {
					return AdditionalInfoRow(key, addInfoRows[key]);
				})}
			</Grid>
		);
	};

	const GridItem = (row) => {
		return (
			<Grid item xs={12} sm={12} md={6} lg={4}>
				<CustomCard name={row?.Name} moreInfo={() => AdditionalInfo(row.additionalInfo)}>
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
