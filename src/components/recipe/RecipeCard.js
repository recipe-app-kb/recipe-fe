import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardText, CardBody } from 'reactstrap';

function RecipeCard(props) {
	const { recipe } = props;

	return (
		<>
			<Card body className="recipe-card">
				<CardBody className="card-titles">
					<CardTitle>{recipe.title}</CardTitle>
					<CardText>{recipe.description}</CardText>
				</CardBody>
				<CardBody className="card-links">
					<Link to={`/recipe/${recipe.id}/details`}>Details</Link>
					{/* <Link>Edit</Link> */}
				</CardBody>
			</Card>
		</>
	)
}

export default RecipeCard;