import { ADD_STEP_TO_RECIPE_START, ADD_STEP_TO_RECIPE_SUCCESS, ADD_STEP_TO_RECIPE_FAIL, EDIT_STEPS_START, EDIT_STEPS_SUCCESS, EDIT_STEPS_FAIL } from '../actions/types';

const initialState = {
	isAddingStep: false,
	addedStep: false,
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
		default:
			return state
	}
}

export default stepsReducer;