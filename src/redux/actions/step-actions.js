import { axiosWithAuth } from '../../protected/axiosWithAuth';
import {
	ADD_STEP_TO_RECIPE_START,
	ADD_STEP_TO_RECIPE_SUCCESS,
	ADD_STEP_TO_RECIPE_FAIL,
	REMOVE_STEP_START,
	REMOVE_STEP_SUCCESS,
	REMOVE_STEP_FAIL,
} from './types';
import axios from 'axios';

export const addStepToRecipe = (data) => dispatch => {
	dispatch({ type: ADD_STEP_TO_RECIPE_START });

	axiosWithAuth().post("http://localhost:5000/api/steps", data)
		.then(res => {
			console.log(res.data)
			dispatch({ type: ADD_STEP_TO_RECIPE_SUCCESS })
		})
		.catch(err => {
			dispatch({ type: ADD_STEP_TO_RECIPE_FAIL, payload: err })
		})
}

export const removeStep = (id) => dispatch => {
	dispatch({ type: REMOVE_STEP_START });

	axios.delete(`http://localhost:5000/api/steps/${id}`)
		.then(res => {
			console.log(res);
			dispatch({ type: REMOVE_STEP_SUCCESS });
		})
		.catch(err => {
			dispatch({ type: REMOVE_STEP_FAIL, payload: err });
		})
}