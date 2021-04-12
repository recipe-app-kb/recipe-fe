import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { addStepToRecipe, removeStep, fetchStepsForRecipe } from '../../redux/actions/step-actions';
import StepsList from '../StepsList';
import StepForm from '../forms/StepForm';

function EditSteps(props) {
	const { recipe, addStepToRecipe, removeStep, fetchStepsForRecipe, isFetchingSteps, steps } = props;
	const [isEditing, setIsEditing] = useState(false);
	const [step, setStep] = useState({});

	useEffect(() => {
		fetchStepsForRecipe(recipe.id);
	}, []);

	function handleAddingStep(stepNumber, instruction) {
		const stepData = {
			recipe_id: recipe.id,
			instruction: instruction,
			step_num: parseInt(stepNumber)
		}

		if (stepData.recipe_id && stepData.instruction && stepData.step_num) {
			addStepToRecipe(stepData);
		} else {
			console.log("Please enter step number and step instruction")
		}
	}

	function handleRemoveStep(id) {
		removeStep(id);
	}

	function handleEdittingStep(stepData) {
		// Need to figure out how to disable other steps while one is being edited.
		setIsEditing(!isEditing);
		setStep(stepData);
	}

	return (
		<div className="eidt-steps">
			<div className="container">
				<h3>Edit Steps</h3>
				{/* Steps */}
				<StepsList
					steps={steps}
					handleRemoveStep={handleRemoveStep}
					handleEdittingStep={handleEdittingStep}
				/>

				{/* Add step */}
				<StepForm
					handleAddingStep={handleAddingStep}
					isEditing={isEditing}
					step={step}
				/>
			</div>
		</div >
	)
}

function mapStateToProps(state) {
	return {
		isAddingStep: state.stepsReducer.isAddingStep,
		error: state.stepsReducer.error,
		isFetchingSteps: state.stepsReducer.isFetchingSteps,
		steps: state.stepsReducer.steps,
	}
}

export default connect(mapStateToProps, { addStepToRecipe, removeStep, fetchStepsForRecipe })(EditSteps);
