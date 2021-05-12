import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { addStepToRecipe, removeStep, fetchStepsForRecipe, updateStep } from '../../redux/actions/step-actions';
import StepsList from '../StepsList';
import StepForm from '../forms/StepForm';

function EditSteps(props) {
	const { recipe, addStepToRecipe, removeStep, fetchStepsForRecipe, updateStep, steps, updatedCount } = props;
	const [isEditingStep, setIsEditingStep] = useState(null);
	const [step, setStep] = useState({}); // Need to change name of this state.

	useEffect(() => {
		fetchStepsForRecipe(recipe.id);
	}, [updatedCount]);

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
		(isEditingStep !== null) ? clearData() : setIsEditingStep(stepData.id);
		setStep(stepData);
	}

	function handleUpdateStep(id, changes = {}) {
		updateStep(id, changes);
		clearData();
	}

	function clearData() {
		setIsEditingStep(null);
		setStep({});
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
					isEditingStep={isEditingStep}
					handleUpdate={handleUpdateStep}
				/>

				{/* Add step */}
				<StepForm
					handleAddingStep={handleAddingStep}
					step={step}
					clearData={clearData}
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
		updatedCount: state.stepsReducer.updatedCount,
	}
}

export default connect(mapStateToProps, { addStepToRecipe, removeStep, fetchStepsForRecipe, updateStep })(EditSteps);
