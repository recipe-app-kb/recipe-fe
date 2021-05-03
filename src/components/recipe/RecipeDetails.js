import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { fetchRecipeDetails } from '../../redux/actions/recipe-actions';
import { toggleHasIngredient } from '../../redux/actions/ingredient-actions';

function RecipeDetails(props) {

	const { fetchRecipeDetails, recipeDetails, isFetching, toggleHasIngredient, recipeIngredients } = props;
	const id = props.match.params.id;
	const [ingredients, setIngredients] = useState([]);

	function handleChange(idx) {
		updateHasIngredientAt(idx);
	}

	function updateHasIngredientAt(indexToChange) {
		let ingredientData = recipeDetails.ingredients.filter(ingredient => ingredient.ingredient_id === indexToChange)[0];
		ingredientData = { ...ingredientData, has_ingredient: !ingredientData.has_ingredient };

		const changes = { has_ingredient: ingredientData.has_ingredient };
		toggleHasIngredient(ingredientData.ingredient_id, recipeDetails.id, changes);

		// Need a way to rerender ingredients after update.
		const updatedIngredients = ingredients.map((ing) => {
			if (ing.ingredient_id === indexToChange) {
				ing.has_ingredient = ingredientData.has_ingredient;
			}

			return ing;
		});

		setIngredients(updatedIngredients);
	}

	function getNumberOfHaveIngredients() {
		const haves = ingredients.filter(ingredient => ingredient.has_ingredient === 1 || ingredient.has_ingredient === true);

		return haves.length;
	}

	useEffect(() => {
		fetchRecipeDetails(id);
	}, []);

	useEffect(() => {
		if (recipeIngredients) {
			setIngredients(recipeIngredients);
			getNumberOfHaveIngredients();
		}
	}, [recipeIngredients]);

	return (
		<div className="details-wrapper">
			<div className="container">
				{isFetching && <p>Loading recipe...</p>}
				{recipeDetails && (
					<div className="recipe-details">
						<Button
							outline
							onClick={() => { props.history.push('/recipes'); }}
						>Go Back</Button>
						<section className="description-wrapper">
							<h1>{recipeDetails.title}</h1>
							<p>{recipeDetails.description}</p>
						</section>

						<div className="holder">
							<section className="ingredient-info">
								<h2>Ingredients</h2>
								<p>You have {getNumberOfHaveIngredients()} / {recipeDetails.ingredients.length} ingredients.</p>
								<Form>
									<FormGroup check>
										{ingredients ? ingredients.map(ingredient => (
											<Label check key={ingredient.ingredient_id} style={{ width: "100%", margin: "5px 0" }}>
												<Input
													type="checkbox"
													name="ingredient"
													onChange={() => handleChange(ingredient.ingredient_id)}
													checked={ingredient.has_ingredient}
												/> <span style={{ marginLeft: "5px" }}>{ingredient.name}</span>
											</Label>
										)) : <p>Loading...</p>}
									</FormGroup>
								</Form>
							</section>

							<section className="steps-info">
								<h2>Steps</h2>
								<ol>
									{recipeDetails.steps.map(step => (
										<li key={step.id}>{step.instruction}</li>
									))}
								</ol>
							</section>
						</div>

					</div>
				)}
			</div>
		</div>
	)
}

function mapStateToProps(state) {
	return {
		recipeDetails: state.recipesReducer.recipeDetails,
		isFetching: state.recipesReducer.isFetching,
		recipeIngredients: state.recipesReducer.recipeDetails ? state.recipesReducer.recipeDetails.ingredients : null,
	}
}

export default connect(mapStateToProps, { fetchRecipeDetails, toggleHasIngredient })(RecipeDetails);