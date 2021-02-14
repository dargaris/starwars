import axios from 'axios';

const axiosConfig = axios.create({
	baseURL: 'https://swapi.dev/api/',
});

export default axiosConfig;
