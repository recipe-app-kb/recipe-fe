import React, { useState } from 'react'
import { connect } from 'react-redux';
import { registerUser } from '../../redux/actions/user-action';

// Reactstrap
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Register(props) {

	const { registerUser } = props;

	const [userInput, setUserInput] = useState({
		username: '',
		password: ''
	});

	// handle change to inputs
	const handleChange = (e) => {
		setUserInput({
			...userInput,
			[e.target.name]: e.target.value
		})
	}

	// Register user
	const saveUser = (e) => {
		e.preventDefault();

		if (userInput.username && userInput.password) {
			console.log('user saved');

			registerUser(userInput);
			// props.history.push('/login');
			setUserInput({
				username: '',
				password: ''
			});
		} else {
			console.log('Please enter a username and password');
		}
	}

	return (
		<>
			<div className="login">
				<div className="container">
					<div className="form-wrapper">
						<h1>Sign Up</h1>
						<Form onSubmit={saveUser}>
							<FormGroup>
								<Label for="username">Username:</Label>
								<Input
									type="username"
									name="username"
									id="username"
									placeholder="Enter your username"
									value={userInput.username}
									onChange={handleChange}
								/>
							</FormGroup>
							<FormGroup>
								<Label for="password">Password:</Label>
								<Input
									type="password"
									name="password"
									id="password"
									placeholder="Enter your password"
									value={userInput.password}
									onChange={handleChange}
								/>
							</FormGroup>
							<Button color="warning">Submit</Button>
						</Form>
					</div>
				</div>
			</div>
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		isRegistering: state.userReducer.isRegistering,
		isRegistered: state.userReducer.isRegistered
	}
}

export default connect(mapStateToProps, { registerUser })(Register);
