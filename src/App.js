import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.config';
import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/ShopPage/ShopPage.component';
import SignInSignUpPage from './pages/SignInSignUpPage/SignInSignUpPage.component';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentUser: null,
		};
	}

	unSubscribeFromAuth = null;

	componentDidMount() {
		this.unSubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
			if (user) {
				const userRef = await createUserProfileDocument(user);
				userRef.onSnapshot((snapshot) => {
					this.setState({
						currentUser: {
							id: snapshot.id,
							...snapshot.data(),
						},
					});
					console.log(this.state);
				});
			} else {
				this.setState({ currentUser: user });
				console.log(this.state);
			}
		});
	}

	componentWillUnmount() {
		this.unSubscribeFromAuth();
	}

	render() {
		return (
			<div className='App'>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/shop' component={ShopPage} />
					<Route path='/sign-in' component={SignInSignUpPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
