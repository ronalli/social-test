import { Form, Field } from 'react-final-form';

const LoginForm = (props) => {

	return (
		<Form
			onSubmit={props.onSubmit}
			validate={values => {
				const errors = {}
				if (!values.email) {
					errors.email = 'Required'
				}
				if (!values.password) {
					errors.password = 'Required'
				}
				return errors
			}}
			render={({ handleSubmit }) => (
				<form onSubmit={handleSubmit}>
					<div>
						<Field name='email'>
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
						<Field name='password' >
							{({ input, meta }) => (
								<div>
									<label>Password</label>
									<input {...input} type="text" placeholder='Password' />
									{meta.error && meta.touched && <span>{meta.error}</span>}
								</div>
							)}
						</Field>
						{/* component='input'
							type='text'
							placeholder='Password'
						/> */}
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