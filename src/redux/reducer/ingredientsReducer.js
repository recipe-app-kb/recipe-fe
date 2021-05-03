import {
	FETCH_INGREDIENTS_START,
	FETCH_INGREDIENTS_SUCCESS,
	FETCH_INGREDIENTS_FAIL,
	ADD_INGREDIENT_TO_RECIPE_START,
	ADD_INGREDIENT_TO_RECIPE_SUCCESS,
	ADD_INGREDIENT_TO_RECIPE_FAIL,
	FETCH_ADDED_INGREDIENTS_START,
	FETCH_ADDED_INGREDIENTS_SUCCESS,
	FETCH_ADDED_INGREDIENTS_FAIL,
	DELETE_INGREDIENT_FROM_RECIPE_START,
	DELETE_INGREDIENT_FROM_RECIPE_SUCCESS,
	DELETE_INGREDIENT_FROM_RECIPE_FAIL,
	UPDATE_HAS_INGREDIENT_ON_RECIPE_START,
	UPDATE_HAS_INGREDIENT_ON_RECIPE_SUCCESS,
	UPDATE_HAS_INGREDIENT_ON_RECIPE_FAIL,
} from '../actions/types';

const initialState = {
	isFetching: false,
	error: null,
	ingredients: [],
	isAdding: false,
	added: false,
	addedIngredients: [],
	isDeleting: false,
	isDeleted: false,
	updatedIngredient: false,
}

function ingredientsReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_INGREDIENTS_START:
			return {
				...state,
				isFetching: true,
				error: null
			}
		case FETCH_INGREDIENTS_SUCCESS:
			return {
				...state,
				isFetching: false,
				ingredients: action.payload,
				error: null
			}
		case FETCH_INGREDIENTS_FAIL:
			return {
				...state,
				ingredients: [],
				error: action.payload
			}
		case ADD_INGREDIENT_TO_RECIPE_START:
			return {
				...state,
				isAdding: true,
				added: false,
				error: null
			}
		case ADD_INGREDIENT_TO_RECIPE_SUCCESS:
			return {
				...state,
				isAdding: false,
				added: !state.added,
				error: null
			}
		case ADD_INGREDIENT_TO_RECIPE_FAIL:
			return {
				...state,
				added: false,
				isAdding: false,
				error: action.payload
			}
		case FETCH_ADDED_INGREDIENTS_START:
			return {
				...state,
				error: null
			}
		case FETCH_ADDED_INGREDIENTS_SUCCESS:
			return {
				...state,
				addedIngredients: action.payload,
				error: null
			}
		case FETCH_ADDED_INGREDIENTS_FAIL:
			return {
				...state,
				addedIngredients: null,
				error: action.payload
			}
		case DELETE_INGREDIENT_FROM_RECIPE_START:
			return {
				...state,
				isDeleting: true,
				error: null,
				isDeleted: false,
			}
		case DELETE_INGREDIENT_FROM_RECIPE_SUCCESS:
			return {
				...state,
				isDeleting: false,
				isDeleted: !state.isDeleted,
				error: null,
			}
		case DELETE_INGREDIENT_FROM_RECIPE_FAIL:
			return {
				...state,
				isDeleting: false,
				isDeleted: false,
				error: action.payload
			}
		case UPDATE_HAS_INGREDIENT_ON_RECIPE_START:
			return {
				...state,
				updatedIngredient: false,
				error: null,
			}
		case UPDATE_HAS_INGREDIENT_ON_RECIPE_SUCCESS:
			return {
				...state,
				updatedIngredient: !state.updatedIngredient,
				error: null,
			}
		case UPDATE_HAS_INGREDIENT_ON_RECIPE_FAIL:
			return {
				...state,
				updatedIngredient: false,
				error: action.payload
			}
		default:
			return state;
	}
}

export default ingredientsReducer;