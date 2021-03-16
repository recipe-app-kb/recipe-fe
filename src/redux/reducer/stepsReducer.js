import {
	ADD_STEP_TO_RECIPE_START,
	ADD_STEP_TO_RECIPE_SUCCESS,
	ADD_STEP_TO_RECIPE_FAIL,
	REMOVE_STEP_START,
	REMOVE_STEP_SUCCESS,
	REMOVE_STEP_FAIL,
} from '../actions/types';

const initialState = {
	isAddingStep: false,
	addedStep: false,
	isDeletingStep: false,
	deletedStep: false,
	error: null
}

const stepsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_STEP_TO_RECIPE_START:
			return {
				isAddingStep: true,
				addedStep: false,
				error: null
			}
		case ADD_STEP_TO_RECIPE_SUCCESS:
			return {
				isAddingStep: false,
				addedStep: true,
				error: null
			}
		case ADD_STEP_TO_RECIPE_FAIL:
			return {
				isAddingStep: false,
				addedStep: false,
				error: action.payload
			}
		case REMOVE_STEP_START:
			return {
				isDeletingStep: true,
				deletedStep: false,
				error: null
			}
		case REMOVE_STEP_SUCCESS:
			return {
				isDeletingStep: false,
				deletedStep: true,
				error: null
			}
		case REMOVE_STEP_FAIL:
			return {
				isDeletingStep: false,
				deletedStep: false,
				error: action.payload
			}
		default:
			return state
	}
}

export default stepsReducer;