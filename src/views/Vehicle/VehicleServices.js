import axiosConfig from 'utils/axiosConfig';
import { dateFormat } from 'utils/commonUtils';

export const getVehicles = async () => {
	let response;
	try {
		response = await axiosConfig.get('vehicles');
		let results = response.data.results.map((row) => processVehicleRow(row));
		return results;
	} catch (e) {
		console.log(e);
	}
	return response;
};

export const processVehicleRow = (res) => {
	let info = {
		Model: res.model,
		Manufacturer: res.manufacturer,
		'Cost in credits': res.cost_in_credits,
		Length: res.length,
		'Max Atmosphering Speed': res.max_atmosphering_speed,
		crew: res.crew,
		passengers: res.passengers,
		'Cargo Capacity': res.cargo_capacity,
		Consumables: res.consumables,
		'Vehicle Class': res.Vehicle_class,
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
