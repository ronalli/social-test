import React from 'react';
import LoginForm from './LoginForm';

const Login = (props) => {
	
	return (
		<>
			<h1>LOGIN</h1>
			<LoginForm onSubmit={props.onSubmit} />
		</>
	);

}


export default Login;