import axiosConfig from 'utils/axiosConfig';
import { dateFormat } from 'utils/commonUtils';
import { SET_PLANETS } from 'constants/actionTypes';

export const getPlanets = async (dispatch) => {
	let response;
	try {
		response = await axiosConfig.get('planets');
		let results = response.data.results.map((row) => processPlanetsRow(row));
		dispatch({ type: SET_PLANETS, value: results });
	} catch (e) {
		console.log(e);
	}
	return response;
};

export const processPlanetsRow = (res) => {
	let info = {
		'Rotation Period': res.rotation_period,
		'Orbital Period': res.orbital_period,
		Diameter: res.diameter,
		Climate: res.climate,
		Gravity: res.gravity,
		Terrain: res.terrain,
		'Surface Water': res.surface_water,
		Population: res.population,
		Created: dateFormat(res.created),
		Edited: dateFormat(res.edited),
	};
	let additionalInfo = {
		Residents: res.residents,
		Films: res.films,
		//SelfLink: res.url
	};
	return { Name: res.name, info, additionalInfo };
};
