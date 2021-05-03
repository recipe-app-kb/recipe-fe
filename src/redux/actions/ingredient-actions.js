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
} from './types';
import axios from 'axios';

export const getIngredients = () => dispatch => {
	dispatch({ type: FETCH_INGREDIENTS_START });

	axios.get('http://localhost:5000/api/ingredients')
		.then(res => {
			dispatch({ type: FETCH_INGREDIENTS_SUCCESS, payload: res.data })
		})
		.catch(err => {
			dispatch({ type: FETCH_INGREDIENTS_FAIL, payload: err });
		})
}

export const addIngredientsToRecipe = (id, body) => dispatch => {
	dispatch({ type: ADD_INGREDIENT_TO_RECIPE_START });

	axios.post(`http://localhost:5000/api/ingredients/${id}`, body)
		.then(res => {
			console.log(res.data);
			dispatch({ type: ADD_INGREDIENT_TO_RECIPE_SUCCESS, payload: res.data });
		})
		.catch(err => {
			dispatch({ type: ADD_INGREDIENT_TO_RECIPE_FAIL, payload: err })
		})
}

export const getIngredientsByRecipeId = (id) => dispatch => {
	dispatch({ type: FETCH_ADDED_INGREDIENTS_START });

	axios.get(`http://localhost:5000/api/recipes/${id}/ingredients`)
		.then(res => {
			// console.log(res.data);
			dispatch({ type: FETCH_ADDED_INGREDIENTS_SUCCESS, payload: res.data });
		})
		.catch(err => {
			dispatch({ type: FETCH_ADDED_INGREDIENTS_FAIL, payload: err });
		})
}

export const removeIngredientFromRecipe = (ingredientId, recipeId) => dispatch => {
	dispatch({ type: DELETE_INGREDIENT_FROM_RECIPE_START })

	axios.delete(`http://localhost:5000/api/ingredients/${ingredientId}/recipe/${recipeId}`)
		.then(res => {
			dispatch({ type: DELETE_INGREDIENT_FROM_RECIPE_SUCCESS, payload: { count: res.data, removedIngredientId: ingredientId, removedRecipeId: recipeId } })
		})
		.catch(err => {
			dispatch({ type: DELETE_INGREDIENT_FROM_RECIPE_FAIL, payload: err })
		})
}

export const toggleHasIngredient = (ingredientId, recipeId, updates) => dispatch => {
	dispatch({ type: UPDATE_HAS_INGREDIENT_ON_RECIPE_START });

	axios.put(`http://localhost:5000/api/ingredients/${ingredientId}/recipe/${recipeId}`, updates)
		.then(res => {
			dispatch({ type: UPDATE_HAS_INGREDIENT_ON_RECIPE_SUCCESS, payload: res.data })
			console.log(res);
		})
		.catch(err => {
			dispatch({ type: UPDATE_HAS_INGREDIENT_ON_RECIPE_FAIL });
			console.log("error updating ingredient", err);
		})
}