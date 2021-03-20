import React from "react";
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StepsList = (props) => {
    const { steps, handleRemoveStep } = props;

    return (
        <>
            <div className="current-steps">
                <ol>
                    {steps.map(step => (
                        <li key={step.id}>{step.instruction}
                            <FontAwesomeIcon icon="times" onClick={(e) => handleRemoveStep(step.id, e)} />
                        </li>
                    ))}
                </ol>
            </div>
        </>
    );
}

export default StepsList;