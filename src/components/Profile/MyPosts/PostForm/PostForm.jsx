import { Form, Field } from "react-final-form";

const required = value => (value ? undefined : 'Required');

const maxValue = maxSymbol => value => {
	return value.length <= maxSymbol ? undefined : 'Exceeded max lenght post';
}

const composeValidators = (...validators) => value => {
	return validators.reduce((error, validator) => error || validator(value), undefined)
}

let PostForm = (props) => {

	return (
		<Form
			onSubmit={props.onSubmit}
			render={({ handleSubmit }) => (
				<form onSubmit={handleSubmit}>
					<div>
						<Field name='postMessage' validate={composeValidators(required, maxValue(20))}>
							{({ input, meta }) => (
								<div>
									<input {...input} type='text' placeholder={'text your post'} />
									{meta.error && meta.touched && <span>{meta.error}</span>}
								</div>
							)}

						</Field>
					</div>
					<div>
						<button type={'submit'}>send</button>
					</div>
				</form>
			)}


		/>
	);

}

export default PostForm;