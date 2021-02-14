import axiosConfig from 'utils/axiosConfig';
import { dateFormat } from 'utils/commonUtils';
import { SET_STARSHIPS } from 'constants/actionTypes';

export const getStarship = async (dispatch) => {
	let response;
	try {
		response = await axiosConfig.get('starships');
		let results = response.data.results.map((row) => processStarshipRow(row));
		dispatch({ type: SET_STARSHIPS, value: results });
	} catch (e) {
		console.log(e);
	}
	return response;
};

export const processStarshipRow = (res) => {
	let info = {
		Model: res.model,
		Manufacturer: res.manufacturer,
		'Cost in credits': res.cost_in_credits,
		Length: res.length,
		'Max Atmosphering Speed':res.max_atmosphering_speed,
		crew: res.crew,
		passengers: res.passengers,
		'Cargo Capacity': res.cargo_capacity,
		Consumables: res.consumables,
		'Hyperdrive Rating': res.hyperdrive_rating,
		MGLT: res.MGLT,
		'Starship Class': res.starship_class,
		Created: dateFormat(res.created),
		Edited: dateFormat(res.edited),
	};
	let additionalInfo = {
		Films: res.films,
		Pilots: res.pilots,
		//SelfLink: res.url
	};
	return { Name: res.name, info, additionalInfo };
};
