import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const DisplayingErrorMessagesSchema = Yup.object().shape({
	password: Yup.string()
		.required('Required'),
	email: Yup.string().email('Invalid email').required('Required'),
});


const LoginForm = (props) => {

	return (
		<div>
			<Formik
				initialValues={{
					email: '',
					password: '',
					rememberMe: ''
				}}
				onSubmit={values => {
					props.postAuth(values)
					document.querySelector('form').reset();
				}}
				validationSchema={DisplayingErrorMessagesSchema}
			>
				{({ errors, touched }) => (
					<Form>
						<div>
							<Field name='email' type='text' placeholder='your email' />
							{errors.email && touched.email && <div>{errors.email}</div>}
						</div>
						<div>
							<Field name='password' type='password' placeholder='your password' />
							{errors.password && touched.password && <div>{errors.password}</div>}
						</div>
						<div>
							<Field name='rememberMe' type='checkbox' />
						</div>
						<div>
							<button type='submit'>login</button>
						</div>
					</Form>
				)
				}
			</Formik>
		</div >
	)
}


export default LoginForm;