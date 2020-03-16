import { axiosWithAuth } from '../../protected/axiosWithAuth';
import {
	FETCH_DATA_START,
	FETCH_DATA_SUCCESS,
	FETCH_DATA_FAIL,
	FETCH_RECIPE_DETAILS_START,
	FETCH_RECIPE_DETAILS_SUCCESS,
	FETCH_RECIPE_DETAILS_FAIL,
	ADD_RECIPE_START,
	ADD_RECIPE_SUCCESS,
	ADD_RECIPE_FAIL
} from './types';


// fetch recipes by user id
export const fetchUserRecipes = (id) => dispatch => {
	dispatch({ type: FETCH_DATA_START });

	axiosWithAuth().get(`http://localhost:5000/api/users/${id}/recipes`)
		.then(res => {
			// console.log(res.data);

			dispatch({
				type: FETCH_DATA_SUCCESS,
				payload: res.data
			});

		})
		.catch(error => {

			dispatch({
				type: FETCH_DATA_FAIL,
				payload: error
			});
		})
}

// Fetch recipe details by recipe id
export const fetchRecipeDetails = (id) => dispatch => {
	dispatch({ type: FETCH_RECIPE_DETAILS_START });

	axiosWithAuth().get(`http://localhost:5000/api/recipes/${id}`)
		.then(res => {

			dispatch({
				type: FETCH_RECIPE_DETAILS_SUCCESS,
				payload: res.data
			});
		})
		.catch(err => {
			dispatch({
				type: FETCH_RECIPE_DETAILS_FAIL,
				payload: err
			})
		})
}

// Post a recipe
export const addRecipe = (userId, recipeData) => dispatch => {

	dispatch({ type: ADD_RECIPE_START });

	axiosWithAuth().post(`http://localhost:5000/api/users/${userId}/recipes`, recipeData)
		.then(res => {

			dispatch({ type: ADD_RECIPE_SUCCESS, payload: res.data[0] })
		})
		.catch(err => {
			dispatch({ type: ADD_RECIPE_FAIL, payload: err })
		})
}