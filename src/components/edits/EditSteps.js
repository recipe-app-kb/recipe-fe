import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addStepToRecipe, removeStep } from '../../redux/actions/step-actions';

function EditSteps(props) {
	const { recipe, addStepToRecipe, removeStep } = props;

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
			recipe_id: recipe.id,
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

	function handleRemoveStep(id) {
		removeStep(id);
	}

	return (
		<div className="eidt-steps">
			<div className="container">
				<h3>Edit Steps</h3>
				{/* Steps */}
				<div className="current-steps">
					<ol>
						{recipe.steps.map(step => (
							<li key={step.id}>{step.instruction}  <Button color="danger" size="sm" onClick={(e) => handleRemoveStep(step.id, e)}>Remove</Button></li>
						))}
					</ol>
				</div>

				{/* Add step */}
				<section className="steps-wrapper">
					<h3>Add Step</h3>
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
			</div>
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

export default connect(mapStateToProps, { addStepToRecipe, removeStep })(EditSteps);
