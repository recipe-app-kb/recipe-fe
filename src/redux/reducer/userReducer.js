import {
	REGISTER_USER_START,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_FAIL,
	LOGIN_USER_START,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
} from '../actions/types';

const initialState = {
	isLoggingIn: false,
	loggedIn: false,
	loggedInUser: JSON.parse(localStorage.getItem('user')) || null,
	isRegistering: false,
	isRegistered: false,
	error: null,
	recipes: [],
}

function userReducer(state = initialState, action) {
	switch (action.type) {
		// Register user
		case REGISTER_USER_START:
			return {
				...state,
				isRegistering: true,
				error: null,
			}
		case REGISTER_USER_SUCCESS:
			return {
				...state,
				isRegistering: false,
				isRegistered: true,
				error: null,
			}
		case REGISTER_USER_FAIL:
			return {
				...state,
				isRegistering: false,
				isRegistered: false,
				error: action.payload
			}
		// Login user
		case LOGIN_USER_START:
			return {
				...state,
				isLoggingIn: true,
				error: null
			}
		case LOGIN_USER_SUCCESS:
			return {
				...state,
				isLoggingIn: false,
				loggedIn: true,
				loggedInUser: action.payload,
				error: null
			}
		case LOGIN_USER_FAIL:
			return {
				...state,
				isLoggingIn: false,
				loggedIn: false,
				loggedInUser: '',
				error: action.payload
			}
		default:
			return state;
	}
}

export default userReducer;