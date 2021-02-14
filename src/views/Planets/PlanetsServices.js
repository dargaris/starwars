import axiosConfig from 'utils/axiosConfig';

export const getPlanets = async () => {
	let response;
	try {
		response = await axiosConfig.get('planets');
		console.log(response);
	} catch (e) {
		console.log(e);
	}
	return response;
};
