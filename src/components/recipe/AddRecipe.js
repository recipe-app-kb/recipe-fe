import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addRecipe } from '../../redux/actions/recipe-actions';

function AddRecipe(props) {

	const { addRecipe, loggedInUser } = props;

	const [userInput, setUserInput] = useState({
		'recipe-title': '',
		description: ''
	});

	function handleChange(e) {
		setUserInput({
			...userInput, [e.target.name]: e.target.value
		});
	}

	// Add recipe on submit.
	function handleSubmit(e) {
		e.preventDefault();

		if (loggedInUser) {
			const id = loggedInUser.id;
			const recipe = {
				'user_id': id,
				'title': userInput['recipe-title'],
				'description': userInput['description']
			}

			addRecipe(id, recipe);

			setUserInput({
				'recipe-title': '',
				description: ''
			});
			props.history.push('/add-ingredients');

		} else {
			props.history.push('/login');
		}
	}

	// Redirect back to all recipes page
	function goBack() {
		props.history.push('/recipes');
	}

	return (
		<div className="add-form">
			<div className="container">
				<h1>Add Recipe</h1>
				<div className="form-wrapper">
					<Form onSubmit={handleSubmit}>
						<FormGroup>
							<Label for="recipe-title">Title:</Label>
							<Input
								type="text"
								name="recipe-title"
								id="recipe-title"
								placeholder="Enter recipe title"
								value={userInput['recipe-title']}
								onChange={handleChange}
							/>
						</FormGroup>
						<FormGroup>
							<Label for="description">Description:</Label>
							<Input
								type="textarea"
								name="description"
								id="description"
								value={userInput.description}
								onChange={handleChange}
							/>
						</FormGroup>
						<Button color="primary">Submit</Button>
						<Button color="secondary" onClick={goBack}>Cancel</Button>
					</Form>
				</div>
			</div>
		</div>
	)
}

// export default AddRecipe;
function mapStateToProps(state) {
	return {
		loggedInUser: state.userReducer.loggedInUser,
		isAdding: state.recipesReducer.isAdding,
		addedRecipe: state.recipesReducer.addedRecipe
	}
}

export default connect(
	mapStateToProps, { addRecipe }
)(AddRecipe);
