import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button } from 'reactstrap';
import classnames from 'classnames';
import { fetchRecipeDetails, updateRecipeInfo } from '../../redux/actions/recipe-actions';

// Component
import RecipeDetailForm from '../edits/EditRecipeInfo ';
import EditIngredients from '../edits/EditIngredients';
import EditSteps from '../edits/EditSteps';

function EditRecipe(props) {
	const { fetchRecipeDetails, updateRecipeInfo, recipe, isFetching, loggedInUser, isUpdating, isUpdated, addedStep } = props;
	const id = props.match.params.id;

	const [activeTab, setActiveTab] = useState('1');

	// Toggle tabs
	const toggle = tab => {
		if (activeTab !== tab) setActiveTab(tab);
	}

	useEffect(() => {
		fetchRecipeDetails(id)
	}, [isUpdated, addedStep])

	if (recipe && !isFetching) {
		return (
			<div className="edit-wrapper">
				<div className="container">
					<Button outline onClick={() => { props.history.push('/recipes'); }} >Go Back</Button>
					<h2>Edit Page</h2>

					{/* Nav for tabs */}
					<Nav tabs>
						<NavItem>
							<NavLink
								className={classnames({ active: activeTab === '1' })}
								onClick={() => { toggle('1'); }}
							>
								Recipe Info
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className={classnames({ active: activeTab === '2' })}
								onClick={() => { toggle('2'); }}
							>
								Ingredients
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className={classnames({ active: activeTab === '3' })}
								onClick={() => { toggle('3'); }}
							>
								Steps
							</NavLink>
						</NavItem>
					</Nav>

					{/* Recipe Info section */}
					<TabContent activeTab={activeTab}>
						<TabPane tabId="1">
							<div className="recipe-info">
								<RecipeDetailForm
									recipe={recipe}
									updateRecipeInfo={updateRecipeInfo}
									loggedInUser={loggedInUser}
								/>
							</div>
						</TabPane>
					</TabContent>

					{/* Ingredients tab */}
					<TabContent activeTab={activeTab}>
						<TabPane tabId="2">
							<div className="recipe-ingredients">
								<EditIngredients recipe={recipe} />
							</div>
						</TabPane>
					</TabContent>

					{/* Steps tab */}
					<TabContent activeTab={activeTab}>
						<TabPane tabId="3">
							<div className="recipe-steps">
								<EditSteps recipe={recipe} />
							</div>
						</TabPane>
					</TabContent>
				</div>
			</div>
		)
	} else {
		return (<p>Fetching data...</p>)
	}
}


function mapStateToProps(state) {
	return {
		recipe: state.recipesReducer.recipeDetails,
		isFetching: state.recipesReducer.isFetching,
		isUpdating: state.recipesReducer.isUpdating,
		isUpdated: state.recipesReducer.isUpdated,
		loggedInUser: state.userReducer.loggedInUser,
		addedStep: state.stepsReducer.addedStep
	}
}

export default connect(mapStateToProps, { fetchRecipeDetails, updateRecipeInfo })(EditRecipe);