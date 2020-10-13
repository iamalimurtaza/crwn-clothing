import React from 'react';
import './CustomButton.styles.scss';
const CustomButton = ({ children, is_google, ...CustomButtonOtherProps }) => {
	return (
		<button
			className={`custom-button ${is_google ? 'google-sign-in' : false}`}
			{...CustomButtonOtherProps}
		>
			{children}
		</button>
	);
};
export default CustomButton;
