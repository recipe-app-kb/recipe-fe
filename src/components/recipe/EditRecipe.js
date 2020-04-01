import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { TabContent, TabPane, Nav, NavItem, NavLink, Spinner } from 'reactstrap';
import classnames from 'classnames';
import { fetchRecipeDetails, updateRecipeInfo } from '../../redux/actions/recipe-actions';

// Component
import RecipeDetailForm from '../edits/EditRecipeInfo ';

function EditRecipe(props) {
	const { fetchRecipeDetails, updateRecipeInfo, recipe, isFetching, loggedInUser, isUpdating, isUpdated } = props;
	const id = props.match.params.id;

	const [activeTab, setActiveTab] = useState('1');

	// Toggle tabs
	const toggle = tab => {
		if (activeTab !== tab) setActiveTab(tab);
	}

	useEffect(() => {
		fetchRecipeDetails(id)
	}, [isUpdated])

	if (recipe && !isFetching) {
		return (
			<div className="edit-wrapper">
				<div className="container">
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
								<h3>Information</h3>
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
								<h3>Ingredients</h3>
							</div>
						</TabPane>
					</TabContent>

					{/* Steps tab */}
					<TabContent activeTab={activeTab}>
						<TabPane tabId="3">
							<div className="recipe-steps">
								<h3>Steps</h3>
							</div>
						</TabPane>
					</TabContent>
				</div>
			</div>
		)
	} else {
		return (<p><Spinner color="primary" />Fetching data...</p>)
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