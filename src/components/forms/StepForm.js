import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const StepForm = (props) => {
    const { handleAddingStep, isEditing, step, setStep, handleUpdate, clearData } = props;

    const [userInput, setUserInput] = useState({
        stepNumber: "",
        instruction: ""
    });

    useEffect(() => {
        setUserInput({
            stepNumber: step.step_num ? `${step.step_num}` : "",
            instruction: step.instruction ? step.instruction : ""
        });
    }, [step]);

    function handleChange(e) {
        setUserInput({
            ...userInput,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (isEditing) {
            const updates = {
                "recipe_id": step.recipe_id,
                "step_num": parseInt(userInput.stepNumber),
                "instruction": userInput.instruction,
            }

            handleUpdate(step.id, updates);
        } else {
            handleAddingStep(userInput.stepNumber, userInput.instruction);
        }

        setUserInput({
            stepNumber: "",
            instruction: ""
        });
    }

    function clearInputs() {
        setUserInput({
            stepNumber: "",
            instruction: ""
        });
        clearData();
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="stepNumber">Step Number</Label>
                <Input
                    type="number"
                    name="stepNumber"
                    id="stepNumber"
                    placeholder="Enter step number"
                    onChange={handleChange}
                    value={userInput.stepNumber}
                />
            </FormGroup>
            <FormGroup>
                <Label for="instruction">Step Instruction</Label>
                <Input
                    type="textarea"
                    name="instruction"
                    id="instruction"
                    onChange={handleChange}
                    value={userInput.instruction}
                />
            </FormGroup>
            <Button>{isEditing ? "Save" : "Add"}</Button>
            <Button onClick={clearInputs}>Clear</Button>
        </Form>
    );
}

export default StepForm;