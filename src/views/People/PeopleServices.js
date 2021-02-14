import axiosConfig from 'utils/axiosConfig';
import { dateFormat } from 'utils/commonUtils';
import { SET_PEOPLE } from 'constants/actionTypes';

export const getPeople = async (dispatch) => {
	let response;
	try {
		response = await axiosConfig.get('people');
		let results = response.data.results.map((row) => processPeopleRow(row));
		dispatch({ type: SET_PEOPLE, value: results });
	} catch (e) {
		console.log(e);
	}
	return response;
};

export const processPeopleRow = (res) => {
	let info = {
		Height: res.height,
		Mass: res.mass,
		'Hair Color': res.hair_color,
		'Skin Color': res.skin_color,
		'Eye Color': res.eye_color,
		'Birth Year': res.birth_year,
		Gender: res.gender,
		Created: dateFormat(res.created),
		Edited: dateFormat(res.edited),
	};
	let additionalInfo = {
		HomeWorld: res.homeworld ? [res.homeworld] : [],
		Films: res.films,
		Species: res.species,
		Vehicles: res.vehicles,
		Starship: res.starships,
		//SelfLink: res.url
	};
	return { Name: res.name, info, additionalInfo };
};
