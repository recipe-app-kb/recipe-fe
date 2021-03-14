import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { sortIngredients } from '../../helpers/helperFunctions';
import { getIngredients, addIngredientsToRecipe, getIngredientsByRecipeId, removeIngredientFromRecipe } from '../../redux/actions/ingredient-actions';

import IngredientsList from './IngredientsList';
import AddedIngredientsList from './AddedIngredientsList';

function EditIngredients(props) {

	const { getIngredients, ingredients, isFetching, recipe, addIngredientsToRecipe, getIngredientsByRecipeId, added, addedIngredients, removeIngredientFromRecipe, isDeleted } = props;

	const [search, setSearch] = useState('');
	const [filteredIngredients, setFilteredIngredients] = useState([]);

	// Load all ingredients on load
	useEffect(() => {
		getIngredients();
	}, [])

	// Save ingredients locally for searching
	useEffect(() => {
		if (ingredients.length > 0) {
			setFilteredIngredients(ingredients);
		}
	}, [ingredients])

	// Search ingredients on search change
	useEffect(() => {
		setFilteredIngredients(
			ingredients.filter((ingredient) => {
				return ingredient.name.toLowerCase().includes(search.toLowerCase());
			})
		);
	}, [search])

	// Keep track of added ingredients
	useEffect(() => {
		getIngredientsByRecipeId(recipe.id);
	}, [added, isDeleted])

	// Handle change
	function handleChange(e) {
		setSearch(e.target.value)
	}

	// Add ingredients to recipe
	function addIngredientToRecipe(ingredient) {
		const data = {
			"recipe_id": recipe.id,
		}
		addIngredientsToRecipe(ingredient.id, data);
	}

	// Remove ingredient from recipe
	function handleRemove(ingId, recId) {
		removeIngredientFromRecipe(ingId, recId)
	}

	return (
		< div className="ingredient-container" >
			<div className="container">
				<h3>Edit Ingredients</h3>
				<section className="ingredients-list">
					<div className="ingredients-block">

						{/* search box to filter out ingredients */}
						<input
							type="text"
							name="ingredients"
							id="ingredient-search"
							placeholder="Search ingredient..."
							value={search}
							onChange={handleChange}
						/>

						{/* List ingredients */}
						<IngredientsList
							isFetching={isFetching}
							filteredIngredients={filteredIngredients}
							addIngredientToRecipe={addIngredientToRecipe}
						/>
					</div>
				</section>

				{/* Display ingredients added to recipe */}
				<section>
					<h2>Included ingredients</h2>
					<AddedIngredientsList
						addedIngredients={addedIngredients}
						handleRemove={handleRemove}
						recipe={recipe}
					/>
				</section>
			</div>
		</div >
	)
}

// export default AddIngredients;
function mapStateToProps(state) {
	return {
		isFetching: state.ingredientsReducer.isFetching,
		ingredients: sortIngredients(state.ingredientsReducer.ingredients),
		addedIngredients: sortIngredients(state.ingredientsReducer.addedIngredients),
		added: state.ingredientsReducer.added,
		isDeleting: state.ingredientsReducer.isDeleting,
		isDeleted: state.ingredientsReducer.isDeleted,
	}
}

const mapdispatchtoprops = {
	getIngredients,
	addIngredientsToRecipe,
	getIngredientsByRecipeId,
	removeIngredientFromRecipe
}

export default connect(
	mapStateToProps, mapdispatchtoprops
)(EditIngredients);
