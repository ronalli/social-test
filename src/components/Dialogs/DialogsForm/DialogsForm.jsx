import { Form, Field } from "react-final-form";
import { composeValidators, required, maxValue } from './../../../utils/validators/validators.jsx';


// const requerid = value => (value ? undefined : 'Requerid');
// const maxValue = maxSymbol => value => {
// 	return value.length <= maxSymbol ? undefined : 'Exceeded max length message'
// }

// const composeValidators = (...validators) => value => {
// 	return validators.reduce((error, validator) => error || validator(value), undefined);
// }

let DialogsForm = (props) => {
	return (
		<Form
			onSubmit={props.onSubmit}
			render={({ handleSubmit }) => (
				<form onSubmit={handleSubmit}>
					<div>
						composeValidators
						<Field name='message' validate={composeValidators(required, maxValue(20))}>
							{({ input, meta }) => (
								<div>
									<input {...input} type='text' placeholder='your message friend' />
									{meta.error && meta.touched && <span>{meta.error}</span>}
								</div>
							)}

						</Field>
						{/* component='input'
							type='text'
							placeholder='message'
						/> */}
					</div>
					<div>
						<button type={'submit'}>send</button>
					</div>
				</form>
			)}
		/>
	);
}

export default DialogsForm;