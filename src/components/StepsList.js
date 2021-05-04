import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StepsList = (props) => {
    const { steps, handleRemoveStep, handleEdittingStep, isEditing, handleUpdate } = props;

    return (
        <>
            <div className="current-steps">
                <ol>
                    {steps.map(step => (
                        <li className="step-item" key={step.id}>{step.instruction}
                            <button className="btn-icon step-button">
                                <FontAwesomeIcon
                                    icon="edit"
                                    onClick={(e) => handleEdittingStep(step)}
                                />
                            </button>
                            <button className="btn-icon step-button">
                                <FontAwesomeIcon
                                    icon="times"
                                    onClick={(e) => handleRemoveStep(step.id, e)}
                                />
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
        </>
    );
}

export default StepsList;