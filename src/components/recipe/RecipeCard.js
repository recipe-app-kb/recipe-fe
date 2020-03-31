import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteRecipe } from '../../redux/actions/recipe-actions';
import { Card, CardTitle, CardText, CardBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function RecipeCard(props) {
	const { recipe, deleteRecipe } = props;

	// Delete a recipe
	function handleDelete(id) {
		deleteRecipe(id)
	}

	return (
		<>
			<Card body className="recipe-card">
				<div className="icons" onClick={() => handleDelete(recipe.id)}><FontAwesomeIcon icon="times" /></div>
				<CardBody className="card-titles">
					<CardTitle>{recipe.title}</CardTitle>
					<CardText>{recipe.description}</CardText>
				</CardBody>
				<CardBody className="card-links">
					<Link to={`/recipe/${recipe.id}/details`}>Details</Link>
					<Link to={`/recipe/${recipe.id}/edit`}>Edit</Link>
				</CardBody>
			</Card>
		</>
	)
}

function mapStateToProps(state) {
	return {
		recipes: state.recipesReducer.recipes
	}
}

export default connect(
	mapStateToProps, { deleteRecipe }
)(RecipeCard);