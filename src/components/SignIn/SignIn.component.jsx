import React from 'react';
import { SignInWithGoogle } from '../../firebase/firebase.config';
import CustomButton from '../CustomButton/CustomButton.component';
import Input from '../Input/Input.component';
import './SignIn.styles.scss';

class SignIn extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
		};
	}

	handleOfSubmit = (e) => {
		e.preventDefault();
		this.setState({ email: '', password: '' });
	};

	handleOfInput = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		const { email, password } = this.state;
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleOfSubmit}>
					<Input
						labelText='Your Email'
						name='email'
						value={email}
						id='email'
						changeHandler={this.handleOfInput}
					/>
					<Input
						labelText='Your Password'
						value={password}
						name='password'
						id='password'
						changeHandler={this.handleOfInput}
					/>
					<div className='buttons'>
						<CustomButton type='submit'>Submit Form</CustomButton>
						<CustomButton is_google onClick={SignInWithGoogle}>
							Sign In With Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}
export default SignIn;
