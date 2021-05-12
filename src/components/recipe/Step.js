import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input } from "reactstrap";

const Step = ({ step, handleEdittingStep, isEditingStep, handleRemoveStep }) => {
    return (
        <>
            <li className="step-item" key={step.id}>
                {(isEditingStep && isEditingStep === step.id)
                    ? <Input value={step.instruction} />
                    : step.instruction
                }
                <button
                    className="btn-icon step-button"
                    onClick={(e) => handleEdittingStep(step)}
                    disabled={isEditingStep && isEditingStep !== step.id}
                >
                    <FontAwesomeIcon icon="edit" />
                </button>
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
