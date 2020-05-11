import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { fetchRecipeDetails } from '../../redux/actions/recipe-actions';

function RecipeDetails(props) {

	const { fetchRecipeDetails, recipeDetails, isFetching } = props;
	const id = props.match.params.id;
	const [isChecked, setIsChecked] = useState(false);

	function handleChange(e) {
		setIsChecked(e.target.checked);
		console.log("Checked status:", isChecked);
	}

	useEffect(() => {
		fetchRecipeDetails(id);
	}, [])

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
								<p>You have 0 / {recipeDetails.ingredients.length} ingredients.</p>
								<Form>
									<FormGroup check>
										{recipeDetails.ingredients.map(ingredient => (
											<Label check key={ingredient.id} style={{ width: "100%", margin: "5px 0" }}>
												<Input
													type="checkbox"
													name="ingredient"
													onChange={handleChange}
													checked={ingredient.has_ingredients}
												/> <span style={{ marginLeft: "5px" }}>{ingredient.name}</span>
											</Label>
										))}
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
		isFetching: state.recipesReducer.isFetching
	}
}

export default connect(mapStateToProps, { fetchRecipeDetails })(RecipeDetails);