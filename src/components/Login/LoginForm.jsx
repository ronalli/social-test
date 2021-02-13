import { Form, Field } from 'react-final-form';

const LoginForm = (props) => {

	return (
		<Form
			onSubmit={props.onSubmit}
			render={({ handleSubmit }) => (
				<form onSubmit={handleSubmit}>
					<div>
						<Field
							name='email'
							component='input'
							type='text'
							placeholder='Email'
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