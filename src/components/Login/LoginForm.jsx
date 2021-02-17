import { Form, Field } from 'react-final-form';
import { required, emailStr } from './../../utils/validators/validators';

// const required = (value) => (value ? undefined : 'Required')


// const required = (value) => (value ? undefined : 'Required')
// const emailStr = value => {
// 	if (value && value.lastIndexOf('@gmail.com') !== -1) {
// 		return undefined;
// 	}
// 	return 'invalid email format';
// }


const LoginForm = (props) => {

	return (
		<Form
			onSubmit={props.onSubmit}
			render={({ handleSubmit }) => (
				<form onSubmit={handleSubmit}>
					<div>
						<Field name='email' validate={emailStr}>
							{({ input, meta }) => (
								<div>
									<label>Email</label>
									<input {...input} type="text" placeholder='Email' />
									{meta.error && meta.touched && <span>{meta.error}</span>}
								</div>
							)}
						</Field>
					</div>
					<div>
						<Field name='password' validate={required} >
							{({ input, meta }) => (
								<div>
									<label>Password</label>
									<input {...input} type="text" placeholder='Password' />
									{meta.error && meta.touched && <span>{meta.error}</span>}
								</div>
							)}
						</Field>
					</div>
					<div>
						<Field
							name='rememberMe'
							component='input'
							type='checkbox'
						/>
					</div>
					<div>
						<button type={'submit'}>Login</button>
					</div>

				</form>
			)}
		/>
	)
}


export default LoginForm;