import React from 'react';
import './Input.styles.scss';

const Input = ({ type, id, value, labelText, changeHandler, name }) => {
	return (
		<div className='group'>
			<input
				className='form-input'
				name={name}
				type={type}
				id={id}
				value={value}
				onChange={changeHandler}
			/>
			{labelText ? (
				<label className={`form-input-label ${value.length > 0 ? 'shrink' : false}`} htmlFor={id}>
					{labelText}
				</label>
			) : null}
		</div>
	);
};
export default Input;
