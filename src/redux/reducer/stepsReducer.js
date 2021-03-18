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
} from '../actions/types';

const initialState = {
	isAddingStep: false,
	isDeletingStep: false,
	steps: [],
	isFetchingSteps: false,
	error: null
}

const stepsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_STEPS_START:
			return {
				isFetchingSteps: true,
				error: null
			}
		case FETCH_STEPS_SUCCESS:
			return {
				isFetchingSteps: false,
				steps: action.payload,
				error: null
			}
		case FETCH_STEPS_FAIL:
			return {
				isFetchingSteps: false,
				steps: [],
				error: action.payload
			}
		case ADD_STEP_TO_RECIPE_START:
			return {
				isAddingStep: true,
				isFetchingSteps: true,
				error: null
			}
		case ADD_STEP_TO_RECIPE_SUCCESS:
			return {
				isAddingStep: false,
				isFetchingSteps: false,
				steps: state.steps,
				error: null
			}
		case ADD_STEP_TO_RECIPE_FAIL:
			return {
				isAddingStep: false,
				isFetchingSteps: false,
				error: action.payload
			}
		case REMOVE_STEP_START:
			return {
				isDeletingStep: true,
				error: null
			}
		case REMOVE_STEP_SUCCESS:
			return {
				isDeletingStep: false,
				steps: state.steps.filter(step => step.id == action.payload),
				error: null
			}
		case REMOVE_STEP_FAIL:
			return {
				isDeletingStep: false,
				error: action.payload
			}
		default:
			return state
	}
}

export default stepsReducer;