import { ADD_STEP_TO_RECIPE_START, ADD_STEP_TO_RECIPE_SUCCESS, ADD_STEP_TO_RECIPE_FAIL, EDIT_STEPS_START, EDIT_STEPS_SUCCESS, EDIT_STEPS_FAIL } from './types';
import axios from 'axios';

export const addStepToRecipe = (data) => dispatch => {
	dispatch({ type: ADD_STEP_TO_RECIPE_START });

	axios.post("http://localhost:5000/api/steps/", data)
		.then(res => {
			console.log(res.data)
			dispatch({ type: ADD_STEP_TO_RECIPE_SUCCESS })
		})
		.catch(err => {
			dispatch({ type: ADD_STEP_TO_RECIPE_FAIL, payload: err })
		})
}