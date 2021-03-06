import axiosConfig from 'utils/axiosConfig';
import { dateFormat } from 'utils/commonUtils';
import { SET_SPECIES } from 'constants/actionTypes';

export const getSpecies = async (dispatch) => {
	let response;
	try {
		response = await axiosConfig.get('species');
		let results = response.data.results.map((row) => processSpeciesRow(row));
		dispatch({ type: SET_SPECIES, value: results });
	} catch (e) {
		console.log(e);
	}
	return response;
};

export const processSpeciesRow = (res) => {
	let info = {
		Classification: res.classification,
		Designation: res.designation,
		'Average Height': res.average_height,
		'Skin Colors': res.skin_colors,
		'Hair Colors': res.hair_colors,
		'Eye Colors': res.eye_colors,
		'Average Lifespan': res.average_lifespan,
		Language: res.language,
		Created: dateFormat(res.created),
		Edited: dateFormat(res.edited),
	};
	let additionalInfo = {
		HomeWorld: res.homeworld ? [res.homeworld] : [],
		Films: res.films,
		People: res.people,
		//SelfLink: res.url
	};
	return { Name: res.name, SelfLink: res.url, info, additionalInfo };
};
