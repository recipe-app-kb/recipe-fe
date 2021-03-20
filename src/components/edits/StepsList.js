import React from "react";
import { Button } from 'reactstrap';

const StepsList = (props) => {
    const { steps, handleRemoveStep } = props;

    return (
        <>
            <div className="current-steps">
                <ol>
                    {steps.map(step => (
                        <li key={step.id}>{step.instruction}  <Button color="danger" size="sm" onClick={(e) => handleRemoveStep(step.id, e)}>Remove</Button></li>
                    ))}
                </ol>
            </div>
        </>
    );
}

export default StepsList;