import React from 'react';
import LoginForm from './LoginForm/LoginForm';

const Login = (props) => {

	return (
		<>
			<h1>LOGIN</h1>
			<LoginForm postAuth={props.postAuth} />
		</>
	);

}


export default Login;