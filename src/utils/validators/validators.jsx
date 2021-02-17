// import React from 'react';

export const required = value => (value ? undefined : 'Required');
export const maxValue = maxSymbol => value => {
	return value.length <= maxSymbol ? undefined : 'Exceeded max length message'
}

export const composeValidators = (...validators) => value => {
	return validators.reduce((error, validator) => error || validator(value), undefined);
}


export const emailStr = value => {
	if (value && value.lastIndexOf('@gmail.com') !== -1) {
		return undefined;
	}
	return 'invalid email format';
}