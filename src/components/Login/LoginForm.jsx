import { Form, Field } from 'react-final-form';

const LoginForm = (props) => {
	return (
		<Form
			onSubmit={props.onSubmit}
			render={({ handleSubmit }) => (
				<form onSubmit={handleSubmit}>
					<div>
						<Field
							name='login'
							component='input'
							type='text'
							placeholder='Login'
						/>
					</div>
					<div>
						<Field
							name='password'
							component='input'
							type='text'
							placeholder='Password'
						/>
					</div>
					<div>
						<Field
							name='remember'
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