import React from 'react';
import LoginForm from './LoginForm';

const Login = (props) => {

	const onSubmit = () => {
		console.log('good');
	}

	return (
		<>
			<h1>LOGIN</h1>
			<LoginForm onSubmit={onSubmit} />
		</>
	);

}


export default Login;