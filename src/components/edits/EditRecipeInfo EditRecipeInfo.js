import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function EditRecipeInfo(props) {
	const { recipe, updateRecipeInfo, loggedInUser } = props;

	const [userInput, setUserInput] = useState({
		title: recipe.title,
		description: recipe.description
	});

	// handle change to inputs
	const handleChange = (e) => {
		setUserInput({
			...userInput,
			[e.target.name]: e.target.value
		})
	}

	const handleSave = (e) => {
		e.preventDefault();
		const updates = { ...userInput, user_id: loggedInUser.id }
		updateRecipeInfo(recipe.id, updates)
	}

	return (
		<div className="detail-form">
			<div className="container">
				<Form onSubmit={handleSave}>
					<FormGroup>
						<Label for="title">Title:</Label>
						<Input
							type="title"
							name="title"
							id="title"
							value={userInput.title}
							onChange={handleChange}
						/>
					</FormGroup>
					<FormGroup>
						<Label for="description">Description:</Label>
						<Input
							type="description"
							name="description"
							id="description"
							value={userInput.description}
							onChange={handleChange}
						/>
					</FormGroup>
					<Button color="primary">Save</Button>
				</Form>
			</div>
		</div>
	)
}

export default EditRecipeInfo;
