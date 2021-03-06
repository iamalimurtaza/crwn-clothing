import React from 'react';
import { Link } from 'react-router-dom';
import './Header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.config';

const Header = ({ currentUser }) => {
	return (
		<div className='header'>
			<Link to='/' className='logo-container'>
				<Logo />
			</Link>
			<div className='options'>
				<Link to='/shop' className='option'>
					SHOP
				</Link>
				{currentUser ? (
					<div className='option' onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link to='/sign-in' className='option'>
						SIGN IN
					</Link>
				)}
			</div>
		</div>
	);
};

export default Header;
