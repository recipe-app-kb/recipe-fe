import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addStepToRecipe } from '../../redux/actions/step-actions';

function AddSteps(props) {
	const { addStepToRecipe, addedRecipe } = props;

	const [userInput, setUserInput] = useState({
		stepNumber: "",
		instruction: ""
	})

	function handleChange(e) {
		setUserInput({
			...userInput,
			[e.target.name]: e.target.value
		})
	}


	function addStep() {
		const intStepNum = parseInt(userInput.stepNumber);
		const stepData = {
			recipe_id: addedRecipe,
			instruction: userInput.instruction,
			step_num: intStepNum
		}

		if (stepData.recipe_id && stepData.instruction && stepData.step_num) {
			addStepToRecipe(stepData)
		} else {
			console.log("Please enter step number and step instruction")
		}

		setUserInput({
			stepNumber: "",
			instruction: ""
		})
	}

	return (
		<div className="container">
			<h2>Add Steps</h2>
			<section className="steps-wrapper">
				<Form>
					<FormGroup>
						<Label for="stepNumber">Step Number</Label>
						<Input
							type="number"
							name="stepNumber"
							id="stepNumber"
							placeholder="Enter step number"
							onChange={handleChange}
							value={userInput.stepNumber}
						/>
					</FormGroup>
					<FormGroup>
						<Label for="instruction">Step Instruction</Label>
						<Input
							type="textarea"
							name="instruction"
							id="instruction"
							onChange={handleChange}
							value={userInput.instruction}
						/>
					</FormGroup>
					<Button onClick={addStep}>Add</Button>
				</Form>
			</section>

			<section>
				<h2>Included Steps</h2>
				<div></div>
			</section>
			<Button>Save</Button>
		</div>
	)
}

function mapStateToProps(state) {
	return {
		isAddingStep: state.stepsReducer.isAddingStep,
		addedStep: state.stepsReducer.addedStep,
		error: state.stepsReducer.error,
		addedRecipe: state.recipesReducer.addedRecipe
	}
}

export default connect(mapStateToProps, { addStepToRecipe })(AddSteps);