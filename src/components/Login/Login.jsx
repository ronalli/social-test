import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';

const Login = (props) => {

	if (props.isAuth) return <Redirect to={'/profile'} />

	return (
		<>
			<h1>LOGIN</h1>
			<LoginForm postAuth={props.postAuth} />
		</>
	);

}


export default Login;