import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { getIngredients, addIngredientsToRecipe, getIngredientsByRecipeId } from '../../redux/actions/ingredient-actions';

function EditIngredients(props) {

	const { getIngredients, ingredients, isFetching, recipe, addIngredientsToRecipe, getIngredientsByRecipeId, added, addedIngredients } = props;

	const [search, setSearch] = useState('');
	const [filteredIngredients, setFilteredIngredients] = useState([]);

	// Load all ingredients on load
	useEffect(() => {
		getIngredients();
	}, [])

	// Save ingredients locally for searching
	useEffect(() => {
		setFilteredIngredients(ingredients);
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
		// console.log("Added ingredient", addedIngredients);
	}, [added])

	// Handle change
	function handleChange(e) {
		setSearch(e.target.value)
	}

	// Add ingredients to recipe
	function AddIngredientToRecipe(ingredient) {
		const data = {
			"recipe_id": recipe.id,
		}
		addIngredientsToRecipe(ingredient.id, data);
	}

	// Save and move on to steps
	// function goToSteps() {
	// Pop up modal to confirm saving...
	// }

	return (
		<div>
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
						{isFetching && (<p>Loading ingredients...</p>)}
						<ul>
							{!isFetching && filteredIngredients.map(ingredient => (
								<li key={ingredient.id}>{ingredient.name}<Button color="primary" onClick={() => AddIngredientToRecipe(ingredient)}>Add</Button></li>
							))}
						</ul>
					</div>
				</section>

				{/* Display ingredients added to recipe */}
				<section>
					<h2>Included ingredients</h2>
					<div>
						{addedIngredients.length > 0 ?
							(<div className="recipe-ingredients wrapper">
								{addedIngredients.map(ingredient => (
									<div className="ingredient-item" key={ingredient.id}>{ingredient.name} <Button color="danger">Remove</Button></div>
								))}
							</div>) : (<p>No ingredients added yet.</p>)
						}
					</div>
				</section>
				{/* <Button onClick={goToSteps}>Save</Button> */}
			</div>
		</div >
	)
}

// export default AddIngredients;
function mapStateToProps(state) {
	return {
		isFetching: state.ingredientsReducer.isFetching,
		ingredients: state.ingredientsReducer.ingredients,
		addedIngredients: state.ingredientsReducer.addedIngredients,
		added: state.ingredientsReducer.added
	}
}

export default connect(
	mapStateToProps, { getIngredients, addIngredientsToRecipe, getIngredientsByRecipeId }
)(EditIngredients);
