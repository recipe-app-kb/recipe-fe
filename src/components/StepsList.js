import React from "react";

import Step from "./recipe/Step";

const StepsList = (props) => {
    const { steps, handleRemoveStep, handleEdittingStep, isEditing, handleUpdate } = props;

    return (
        <>
            <div className="current-steps">
                <ol>
                    {steps.map(step => (
                        <Step
                            key={step.id}
                            step={step}
                            handleEdittingStep={handleEdittingStep}
                            handleRemoveStep={handleRemoveStep}
                        />
                    ))}
                </ol>
            </div>
        </>
    );
}

export default StepsList;