import axiosConfig from 'utils/axiosConfig';
import { dateFormat } from 'utils/commonUtils';

export const getPlanets = async () => {
	let response;
	try {
		response = await axiosConfig.get('planets');
		let results = response.data.results.map((row) => processPlanetsRow(row));
		return results;
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
		Films: res.Films,
		//SelfLink: res.url
	};
	return { Name: res.name, info, additionalInfo };
};
