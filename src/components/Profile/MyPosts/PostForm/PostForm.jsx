import { Form, Field } from "react-final-form";

let PostForm = (props) => {

	return (
		<Form
			onSubmit={props.onSubmit}
			render={({ handleSubmit }) => (
				<form onSubmit={handleSubmit}>
					<div>
						<Field
							name='postMessage'
							component='input'
							type='text'
							placeholder='post-message'
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

export default PostForm;