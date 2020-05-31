import axios from 'axios';

export const axiosWithAuth = () => {
	const token = localStorage.getItem('token');

	return axios.create({
		baseURL: process.env.REACT_APP_LOCAL_HOST,
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `${token}`
		}
	});
}