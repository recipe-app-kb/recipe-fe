import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { addStepToRecipe, removeStep, fetchStepsForRecipe } from '../../redux/actions/step-actions';
import StepsList from './StepsList';
import StepForm from '../forms/StepForm';

function EditSteps(props) {
	const { recipe, addStepToRecipe, removeStep, fetchStepsForRecipe, isFetchingSteps, steps } = props;

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

	return (
		<div className="eidt-steps">
			<div className="container">
				<h3>Edit Steps</h3>
				{/* Steps */}
				<StepsList
					steps={steps}
					handleRemoveStep={handleRemoveStep}
				/>

				{/* Add step */}
				<StepForm
					handleAddingStep={handleAddingStep}
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
