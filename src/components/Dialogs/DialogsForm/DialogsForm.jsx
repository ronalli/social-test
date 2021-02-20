
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';

const DisplayingErrorMessagesSchema = Yup.object().shape({
	message: Yup.string()
		.min(2, 'Too Short!')
		.max(20, 'Too Long!')
		.required('Required'),
});

let DialogsForm = (props) => {
	return (
		<div>
			<Formik
				initialValues={{
					message: '',
				}}
				onSubmit={values => {
					props.addMessage(values.message)
					document.querySelector('form').reset();
				}}
				validationSchema={DisplayingErrorMessagesSchema}
			>
				{({ errors, touched }) => (
					<Form>
						<div>
							<Field name='message' placeholder='your message friend' />
							{errors.message && touched.message && <div>{errors.message}</div>}
						</div>
						<div>
							<button type='submit'>send</button>
						</div>
					</Form>
				)
				}

			</Formik>
		</div >

	);
}

export default DialogsForm;