import React, { useState, useEffect } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { loginUser } from '../../redux/actions/user-action';

function Login(props) {
	const { loginUser, loggedIn, error } = props;

	useEffect(() => {
		if (loggedIn) {
			props.history.push('/recipes')
		}
	}, [loggedIn])

	const validate = values => {
		const errors = {};

		if (!values.username) {
			errors.username = "Required";
		}

		if (!values.password) {
			errors.password = "Required";
		}

		return errors;
	}

	// Handle form input
	const formikLogin = useFormik({
		initialValues: {
			username: "",
			password: ""
		},
		validate,
		onSubmit: values => {
			loginUser(values);
		}
	});

	return (
		<>
			<div className="login">
				<div className="container">
					<div className="form-wrapper">
						<h1>Log in</h1>
						<Form onSubmit={formikLogin.handleSubmit}>
							<FormGroup>
								<Label for="username">Username:</Label>
								<Input
									type="username"
									name="username"
									id="username"
									placeholder="Enter your username"
									value={formikLogin.values.username}
									onChange={formikLogin.handleChange}
									onBlur={formikLogin.handleBlur}
								/>
								{(formikLogin.touched.username && formikLogin.errors.username) ? <div>Username is required</div> : null}
							</FormGroup>
							<FormGroup>
								<Label for="password">Password:</Label>
								<Input
									type="password"
									name="password"
									id="password"
									placeholder="Enter your password"
									value={formikLogin.values.password}
									onChange={formikLogin.handleChange}
									onBlur={formikLogin.handleBlur}
								/>
								{(formikLogin.touched.password && formikLogin.errors.password) ? <div>Password is required</div> : null}
							</FormGroup>
							{error ? <div>Invalid username or password!</div> : null}
							<Button color="primary" type="submit">Login</Button>
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
		loggedIn: state.userReducer.loggedIn,
		error: state.userReducer.error
	}
}

export default connect(mapStateToProps, { loginUser })(Login)
