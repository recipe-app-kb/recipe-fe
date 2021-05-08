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
	EDIT_STEPS_START,
	EDIT_STEPS_SUCCESS,
	EDIT_STEPS_FAIL
} from '../actions/types';

const initialState = {
	isAddingStep: false,
	isDeletingStep: false,
	steps: [],
	isFetchingSteps: false,
	updatedCount: null,
	error: null
}

const stepsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_STEPS_START:
			return {
				...state,
				isFetchingSteps: true,
				steps: state.steps,
				error: null
			}
		case FETCH_STEPS_SUCCESS:
			return {
				...state,
				isFetchingSteps: false,
				steps: action.payload,
				error: null
			}
		case FETCH_STEPS_FAIL:
			return {
				...state,
				isFetchingSteps: false,
				steps: [],
				error: action.payload
			}
		case ADD_STEP_TO_RECIPE_START:
			return {
				...state,
				isAddingStep: true,
				isFetchingSteps: true,
				error: null
			}
		case ADD_STEP_TO_RECIPE_SUCCESS:
			return {
				...state,
				isAddingStep: false,
				isFetchingSteps: false,
				steps: [...state.steps, action.payload],
				error: null
			}
		case ADD_STEP_TO_RECIPE_FAIL:
			return {
				...state,
				isAddingStep: false,
				isFetchingSteps: false,
				error: action.payload
			}
		case REMOVE_STEP_START:
			return {
				...state,
				isDeletingStep: true,
				error: null
			}
		case REMOVE_STEP_SUCCESS:
			return {
				...state,
				isDeletingStep: false,
				steps: state.steps.filter(step => step.id !== action.payload),
				error: null
			}
		case REMOVE_STEP_FAIL:
			return {
				...state,
				isDeletingStep: false,
				error: action.payload
			}
		case EDIT_STEPS_START:
			return {
				...state,
				updatedCount: null,
				error: null
			}
		case EDIT_STEPS_SUCCESS:
			return {
				...state,
				updatedCount: action.payload,
				error: null
			}
		case EDIT_STEPS_FAIL:
			return {
				...state,
				updatedCount: false,
				error: action.payload
			}
		default:
			return state
	}
}

export default stepsReducer;