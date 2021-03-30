import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const DisplayingErrorMessagesSchema = Yup.object().shape({
	postMessage: Yup.string()
		.min(2, 'Too Short!')
		.max(20, 'Too Long!')
		.required('Required'),
});

let PostForm = (props) => {

	return (
		<div>
			<Formik
				initialValues={{
					postMessage: ''
				}}
				onSubmit={values => {
					props.addPost(values.postMessage);
					document.querySelector('form').reset();
				}}
				validationSchema={DisplayingErrorMessagesSchema}
			>

				{({ errors, touched }) => (
					<Form>
						<div>
							<Field name='postMessage' placeholder='your post on the wall' />
							{errors.postMessage && touched.postMessage && <div>{errors.postMessage}</div>}
						</div>
						<div>
							<button type='submit'>send</button>
						</div>
					</Form>
				)}
			</Formik>
		</div >
	);

}

export default PostForm;