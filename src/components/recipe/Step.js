import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Step = ({ step, handleEdittingStep, handleRemoveStep }) => {
    return (
        <>
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
        </>
    )
}

export default Step
