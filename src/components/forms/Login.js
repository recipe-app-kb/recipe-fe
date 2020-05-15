import React, { useState, useEffect } from 'react'
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/user-action';
import { Link } from 'react-router-dom';

function Login(props) {

	const { loginUser, loggedIn } = props;

	const [userInput, setUserInput] = useState({
		username: '',
		password: ''
	});

	const [isEmptyInput, setIsEmptyInput] = useState({
		username: false,
		password: false,
	});

	// handle change to inputs
	const handleChange = (e) => {
		setUserInput({
			...userInput,
			[e.target.name]: e.target.value
		})
	}

	// Handle submit
	const submitForm = (e) => {
		e.preventDefault();

		if (userInput.username === "") {
			setIsEmptyInput({
				...isEmptyInput,
				username: true
			});

		}
		if (userInput.password === "") {
			setIsEmptyInput({
				...isEmptyInput,
				password: true
			});

		}

		if (userInput.username && userInput.password) {
			loginUser(userInput);
			setUserInput({
				username: '',
				password: ''
			});
			setIsEmptyInput({
				username: false,
				password: false
			})
		}
	}

	useEffect(() => {
		if (loggedIn) {
			props.history.push('/recipes')
		}
	}, [loggedIn])

	return (
		<>
			<div className="login">
				<div className="container">
					<div className="form-wrapper">
						<h1>Log in</h1>
						<Form onSubmit={submitForm}>
							<FormGroup>
								<Label for="username">Username:</Label>
								<Input
									type="username"
									name="username"
									id="username"
									placeholder="Enter your username"
									value={userInput.username}
									onChange={handleChange}
									invalid={isEmptyInput.username}
								/>
								<FormFeedback>You must enter a username!</FormFeedback>
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
									invalid={isEmptyInput.password}
								/>
								<FormFeedback>You must enter a password!</FormFeedback>
							</FormGroup>
							<Button color="primary">Login</Button>
							<Link to="/register">Don't have an account?</Link>
						</Form>
					</div>
				</div>
			</div>
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		isLoggingIn: state.userReducer.isLoggingIn,
		loggedIn: state.userReducer.loggedIn
	}
}

export default connect(mapStateToProps, { loginUser })(Login)
