import React from 'react';
import './Input.styles.scss';

const Input = ({ type, value, labelText, changeHandler, name }) => {
	return (
		<div className='group'>
			<input
				className='form-input'
				name={name}
				type={type}
				value={value}
				onChange={changeHandler}
			/>
			{labelText ? (
				<label className={`form-input-label ${value.length > 0 ? 'shrink' : false}`}>
					{labelText}
				</label>
			) : null}
		</div>
	);
};
export default Input;
