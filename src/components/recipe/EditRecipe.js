import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRecipeDetails, updateRecipeInfo } from '../../redux/actions/recipe-actions';

// Component
import RecipeDetailForm from '../forms/RecipeDetailForm';

function EditRecipe(props) {
	const { fetchRecipeDetails, updateRecipeInfo, recipe, isFetching, loggedInUser, isUpdating, isUpdated } = props;
	const id = props.match.params.id;

	useEffect(() => {
		fetchRecipeDetails(id)
	}, [isUpdated])

	if (recipe && !isFetching) {
		return (
			<div className="edit-wrapper">
				<div className="container">
					<h2>Edit Page</h2>
					<div className="recipe-info">
						<h3>Information</h3>
						<RecipeDetailForm
							recipe={recipe}
							updateRecipeInfo={updateRecipeInfo}
							loggedInUser={loggedInUser}
						/>
					</div>
					<div className="recipe-ingredients">
						<h3>Ingredients</h3>
					</div>
					<div className="recipe-steps">
						<h3>Steps</h3>
					</div>
				</div>
			</div>
		)
	} else {
		return (<p>Fetching data</p>)
	}
}


function mapStateToProps(state) {
	return {
		recipe: state.recipesReducer.recipeDetails,
		isFetching: state.recipesReducer.isFetching,
		isUpdating: state.recipesReducer.isUpdating,
		isUpdated: state.recipesReducer.isUpdated,
		loggedInUser: state.userReducer.loggedInUser
	}
}

export default connect(mapStateToProps, { fetchRecipeDetails, updateRecipeInfo })(EditRecipe);