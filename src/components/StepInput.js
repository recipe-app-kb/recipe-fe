import React from 'react';
import { Input, Form } from "reactstrap";

const StepInput = ({ step }) => {
    return (
        <>
            <Form>
                <Input value={step.step_num} />
                <Input value={step.instruction} />
            </Form>
        </>
    )
}

export default StepInput;
