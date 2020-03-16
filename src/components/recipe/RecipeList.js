import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUserRecipes } from '../../redux/actions/recipe-actions';
import { Button, Row, Col } from 'reactstrap';

// Components
import RecipeCard from './RecipeCard';

function RecipeList(props) {
	const { fetchUserRecipes, recipes, loggedInUser } = props;

	// Fetch recipes on load
	useEffect(() => {
		fetchUserRecipes(loggedInUser.id);
	}, []);

	// redirect to add recipe page
	function toAddRecipe() {
		props.history.push('/add-recipe');
	}

	return (
		<>
			<div className="recipe-list">
				<div className="container">
					<h1>Your Recipes</h1>
					<Button color="success" onClick={toAddRecipe}>Add Recipe</Button>
					<div className="recipes-wrapper" style={{margin: "20px auto"}}>
						<Row>
							{recipes.length === 0 ? <p>You have no recipes yet...</p> :
								recipes.map(recipe => (
									<Col sm="6" key={recipe.id}>
										<RecipeCard
											recipe={recipe}
										/>
									</Col>
								))}
						</Row>
					</div>
				</div>
			</div>
		</>
	)
}

function mapStateToProps(state) {
	return {
		recipes: state.recipesReducer.recipes,
		loggedInUser: state.userReducer.loggedInUser,
		loggedIn: state.userReducer.loggedIn
	}
}

// export default RecipeList;
export default connect(
	mapStateToProps, { fetchUserRecipes }
)(RecipeList);