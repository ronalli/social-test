import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';

const Login = (props) => {

	if (props.isAuth) return <Redirect to={'/profile'} />

	return (
		<>
			<h1>LOGIN</h1>
			<LoginForm {...props} />
			{
				!props.isAuth && props.errorAuth
					? <div>{props.errorAuth}</div>
					: ''
			}
		</>
	);

}


export default Login;