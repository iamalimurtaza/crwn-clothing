import React from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.config';
import CustomButton from '../CustomButton/CustomButton.component';
import Input from '../Input/Input.component';
import './SignUp.styles.scss';

class SignUp extends React.Component {
	constructor() {
		super();
		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: '',
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;
		if (password !== confirmPassword) {
			alert("Your passwords don't match");
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			await createUserProfileDocument(user, { displayName });
			this.setState = {
				displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			};
		} catch (error) {
			console.error(error);
		}
	};

	handleChage = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className='sign-up'>
				<h1 className='title'>I do not have an account.</h1>
				<span>Sign up with your email and password.</span>
				<form onSubmit={this.handleSubmit}>
					<Input
						type='text'
						name='displayName'
						value={displayName}
						labelText='Display Name'
						changeHandler={this.handleChage}
					/>
					<Input
						type='email'
						name='email'
						value={email}
						labelText='Email'
						changeHandler={this.handleChage}
					/>
					<Input
						type='password'
						name='password'
						value={password}
						labelText='Password'
						changeHandler={this.handleChage}
					/>
					<Input
						type='password'
						name='confirmPassword'
						value={confirmPassword}
						labelText='Confirm Password'
						changeHandler={this.handleChage}
					/>
					<CustomButton type='submit'>SIGN UP</CustomButton>
				</form>
			</div>
		);
	}
}
export default SignUp;
