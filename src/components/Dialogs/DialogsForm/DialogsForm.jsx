import { Form, Field } from "react-final-form";


let DialogsForm = (props) => {
	return (
		<Form
			onSubmit={props.onSubmit}
			render={({ handleSubmit }) => (
				<form onSubmit={handleSubmit}>
					<div>
						<Field
							name='message'
							component='input'
							type='text'
							placeholder='message'
						/>
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