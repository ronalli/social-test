
import { Form, Formik, Field } from "formik";
import * as Yup from 'yup';

const DisplayingErrorMessagesSchema = Yup.object().shape({
	text: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
});

let DialogsForm = (props) => {
	return (
		<div>
			<Formik
				initialValues={{
					text: '',
				}}
				onSubmit={values => props.addMessage(values.text)}
				validationSchema={DisplayingErrorMessagesSchema}
			>

				{({ errors, touched }) => (
					<Form>
						<div>
							<Field name='text' placeholder='your message friend' />
							{errors.text && touched.text && <div>{errors.text}</div>}
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