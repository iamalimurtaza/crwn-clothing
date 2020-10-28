import React from 'react';
import { auth, SignInWithGoogle } from '../../firebase/firebase.config';
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

	handleOfSubmit = async (event) => {
		event.preventDefault();
		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (error) {
			console.error(error);
		}
	};

	handleOfInput = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		const { email, password } = this.state;
		return (
			<div className='sign-in'>
				<h1 className='title'>I already have an account</h1>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleOfSubmit}>
					<Input
						labelText='Your Email'
						name='email'
						value={email}
						changeHandler={this.handleOfInput}
					/>
					<Input
						type='password'
						labelText='Your Password'
						value={password}
						name='password'
						changeHandler={this.handleOfInput}
					/>
					<div className='buttons'>
						<CustomButton type='submit'>SIGN IN</CustomButton>
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
