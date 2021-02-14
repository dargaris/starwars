import { Link } from 'react-router-dom';
import CustomCard from 'components/Card';
import { Grid, Box } from '@material-ui/core';

export const EachKeyItem = (key, item) => {
	return (
		item && (
			<Grid item xs={6} key={key}>
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

export const AdditionalInfoRow = (key, item) => {
	const temp = item?.[0]?.split('/');
	const navItem = temp?.[temp?.length - 3];
	return (
		<Grid item xs={6} key={key}>
			<Box item xs={12} style={{ fontSize: 'small', fontWeight: 600 }}>
				{key}
			</Box>
			<Box item xs={12}>
				<Grid container>
					{!item?.length && 'No Information Available'}
					{item?.map((value, index) => (
						<Grid item xs={12} key={index}>
							<Link to={navItem}>{value}</Link>
						</Grid>
					))}
				</Grid>
			</Box>
		</Grid>
	);
};

export const AdditionalInfo = (addInfoRows) => {
	return (
		<Grid container spacing={2}>
			{Object.keys(addInfoRows).map((key) => {
				return AdditionalInfoRow(key, addInfoRows[key]);
			})}
		</Grid>
	);
};

export const MainContent = (row, index, deleteObject) => {
	const deleteFunc = () => {
		deleteObject(index);
	};
	return (
		<Grid item xs={12} sm={12} md={6} lg={4} key={index}>
			<CustomCard name={row?.Name} moreInfo={() => AdditionalInfo(row.additionalInfo)} deleteCallback={deleteFunc}>
				<Grid container spacing={1}>
					{Object.keys(row?.info)?.map((key) => EachKeyItem(key, row.info[key]))}
				</Grid>
			</CustomCard>
		</Grid>
	);
};
