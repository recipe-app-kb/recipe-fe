import axios from 'axios';

import {
	LOGIN_USER_START,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	REGISTER_USER_START,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_FAIL
} from './types';

// Log in user
export const loginUser = (creds) => (dispatch) => {
	dispatch({ type: LOGIN_USER_START });

	axios.post('http://localhost:5000/api/auth/login', creds)
		.then(res => {
			console.log(res.data);

			// save token
			localStorage.setItem('token', res.data.token);
			// save user
			localStorage.setItem('user', JSON.stringify(res.data.userInfo));

			dispatch({
				type: LOGIN_USER_SUCCESS,
				payload: res.data.userInfo
			});
		})
		.catch(error => {
			dispatch({
				type: LOGIN_USER_FAIL,
				payload: error
			});
		});
}

// Register user
export const registerUser = (userData) => dispatch => {
	dispatch({ type: REGISTER_USER_START });

	axios.post('http://localhost:5000/api/auth/register', userData)
		.then(res => {
			console.log(res.data);
			dispatch({
				type: REGISTER_USER_SUCCESS,
				payload: res.data
			});
		})
		.catch(error => {
			dispatch({
				type: REGISTER_USER_FAIL,
				payload: error
			});
		})
}