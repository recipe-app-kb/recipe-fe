import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function AddSteps() {

	const [userInput, setUserInput] = useState({
		stepNumber: "",
		instruciton: ""
	})

	return (
		<div className="container">
			<h2>Add Steps</h2>
			<section className="steps-wrapper">
				<Form>
					<FormGroup>
						<Label for="stepNumber">Step Number</Label>
						<Input
							type="number"
							name="stepNumber"
							id="stepNumber"
							placeholder="Enter step number"
						/>
					</FormGroup>
					<FormGroup>
						<Label for="instruction">Step Instruction</Label>
						<Input
							type="textarea"
							name="instruction"
							id="instruction"
						/>
					</FormGroup>
					<Button>Add</Button>
				</Form>
			</section>

			<section>
				<h2>Included Steps</h2>
				<div></div>
			</section>
			<Button>Save</Button>
		</div>
	)
}

export default AddSteps;
