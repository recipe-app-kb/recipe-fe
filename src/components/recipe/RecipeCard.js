import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteRecipe } from '../../redux/actions/recipe-actions';
import { Card, CardText, CardBody, CardHeader, CardFooter, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function RecipeCard(props) {
	const { recipe, deleteRecipe } = props;

	// Delete a recipe
	function handleDelete(id) {
		deleteRecipe(id)
	}

	return (
		<>
			<Card className="recipe-card">
				<div className="icons" onClick={() => handleDelete(recipe.id)}><FontAwesomeIcon icon="times" /></div>
				<CardHeader>{recipe.title}</CardHeader>
				<CardBody className="card-titles">
					<CardText>{recipe.description}</CardText>
					<Button size="sm"><Link to={`/recipe/${recipe.id}/details`}>Details</Link></Button>
				</CardBody>
				<CardFooter className="card-links">
					<Link to={`/recipe/${recipe.id}/edit`}>Edit</Link>
				</CardFooter>
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