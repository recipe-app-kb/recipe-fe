import { axiosWithAuth } from '../../protected/axiosWithAuth';
import {
	ADD_STEP_TO_RECIPE_START,
	ADD_STEP_TO_RECIPE_SUCCESS,
	ADD_STEP_TO_RECIPE_FAIL,
	REMOVE_STEP_START,
	REMOVE_STEP_SUCCESS,
	REMOVE_STEP_FAIL,
	FETCH_STEPS_START,
	FETCH_STEPS_SUCCESS,
	FETCH_STEPS_FAIL,
} from './types';
import axios from 'axios';

export const fetchStepsForRecipe = (id) => dispatch => {
	dispatch({ type: FETCH_STEPS_START });

	axios.get(`http://localhost:5000/api/steps/${id}`)
		.then(res => {
			dispatch({ type: FETCH_STEPS_SUCCESS, payload: res.data });
		})
		.catch(err => {
			dispatch({ type: FETCH_STEPS_FAIL, payload: err });
		})
}

export const addStepToRecipe = (data) => dispatch => {
	dispatch({ type: ADD_STEP_TO_RECIPE_START });

	axiosWithAuth().post("http://localhost:5000/api/steps", data)
		.then(res => {
			const newStep = {
				id: res.data[0],
				...data,
			}

			dispatch({ type: ADD_STEP_TO_RECIPE_SUCCESS, payload: newStep });
		})
		.catch(err => {
			dispatch({ type: ADD_STEP_TO_RECIPE_FAIL, payload: err });
		})
}

export const removeStep = (id) => dispatch => {
	dispatch({ type: REMOVE_STEP_START });

	axios.delete(`http://localhost:5000/api/steps/${id}`)
		.then(res => {
			console.log(res);
			dispatch({ type: REMOVE_STEP_SUCCESS, payload: id });
		})
		.catch(err => {
			dispatch({ type: REMOVE_STEP_FAIL, payload: err });
		})
}