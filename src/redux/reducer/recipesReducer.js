import {
	FETCH_DATA_START,
	FETCH_DATA_SUCCESS,
	FETCH_DATA_FAIL,
	FETCH_RECIPE_DETAILS_START,
	FETCH_RECIPE_DETAILS_SUCCESS,
	FETCH_RECIPE_DETAILS_FAIL,
	ADD_RECIPE_START,
	ADD_RECIPE_SUCCESS,
	ADD_RECIPE_FAIL,
	DELETE_RECIPE_START,
	DELETE_RECIPE_SUCCESS,
	DELETE_RECIPE_FAIL,
	UPDATE_RECIPE_INFO_START,
	UPDATE_RECIPE_INFO_SUCCESS,
	UPDATE_RECIPE_INFO_FAIL
} from '../actions/types';

const initialState = {
	isFetching: false,
	error: null,
	recipes: [],
	recipeDetails: null,
	addedRecipe: null,
	isAdding: false,
	isDeleting: false,
	isDeleted: false,
	isUpdating: false,
	isUpdated: false,
}

function recipesReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_DATA_START:
			return {
				...state,
				isFetching: true,
				error: null
			}
		case FETCH_DATA_SUCCESS:
			return {
				...state,
				isFetching: false,
				error: null,
				recipes: action.payload
			}
		case FETCH_DATA_FAIL:
			return {
				...state,
				isFetching: false,
				error: action.payload,
				recipes: []
			}
		case FETCH_RECIPE_DETAILS_START:
			return {
				...state,
				isFetching: true,
				recipeDetails: null,
				error: null
			}
		case FETCH_RECIPE_DETAILS_SUCCESS:
			return {
				...state,
				isFetching: false,
				recipeDetails: action.payload,
				error: null
			}
		case FETCH_RECIPE_DETAILS_FAIL:
			return {
				...state,
				isFetching: false,
				recipeDetails: null,
				error: action.payload
			}
		case ADD_RECIPE_START:
			return {
				...state,
				isAdding: true,
				addedRecipe: null,
				error: null
			}
		case ADD_RECIPE_SUCCESS:
			return {
				...state,
				isAdding: false,
				addedRecipe: action.payload,
				error: null
			}
		case ADD_RECIPE_FAIL:
			return {
				...state,
				addedRecipe: null,
				error: null
			}
		case DELETE_RECIPE_START:
			return {
				...state,
				isDeleting: true,
				isDeleted: false,
				error: null
			}
		case DELETE_RECIPE_SUCCESS:
			return {
				...state,
				isDeleting: false,
				isDeleted: true,
				recipes: state.recipes.filter(recipe => {
					return recipe.id !== action.payload.deletedRecipeId
				}),
				error: null
			}
		case DELETE_RECIPE_FAIL:
			return {
				...state,
				isDeleting: false,
				isDeleted: false,
				error: null
			}
		case UPDATE_RECIPE_INFO_START:
			return {
				...state,
				isUpdating: true,
				isUpdated: false,
				error: null
			}
		case UPDATE_RECIPE_INFO_SUCCESS:
			return {
				...state,
				isUpdating: false,
				isUpdated: true,
				error: null
			}
		case UPDATE_RECIPE_INFO_FAIL:
			return {
				...state,
				isUpdating: false,
				isUpdated: false,
				error: action.payload
			}
		default:
			return state;
	}
}

export default recipesReducer;