import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StepInput from "../StepInput";

const Step = ({ step, handleEdittingStep, isEditingStep, handleRemoveStep }) => {
    return (
        <>
            <li className="step-item" key={step.id}>
                {(isEditingStep && isEditingStep === step.id)
                    ? <StepInput step={step} />
                    : step.instruction
                }
                {(isEditingStep && isEditingStep === step.id)
                    ? <button className="btn-icon step-button" onClick={(e) => handleEdittingStep(step)}><FontAwesomeIcon icon="check" /></button>
                    : <button
                        className="btn-icon step-button"
                        onClick={(e) => handleEdittingStep(step)}
                        disabled={isEditingStep && isEditingStep !== step.id}
                    >
                        <FontAwesomeIcon icon="edit" />
                    </button>
                }
                <button
                    className="btn-icon step-button"
                    onClick={(e) => handleRemoveStep(step.id, e)}
                >
                    <FontAwesomeIcon icon="times" />
                </button>
            </li>
        </>
    )
}

export default Step
