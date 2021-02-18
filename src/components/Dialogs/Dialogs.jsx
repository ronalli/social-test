import React from 'react';
import './Dialogs.css';
import DialogItem from './DialogItem/DialogsItem';
import MessageItem from './MessageItem/MessageItem';
import DialogsForm from './DialogsForm/DialogsForm';

const Dialogs = (props) => {


	let dialogsElements = props.dialogsNames.map((data) => {
		return <DialogItem key={`${data.id}${data.name}`} name={data.name} id={data.id} image={data.image} />
	});

	let messagesElements =
		props.messagesNames.map(data => <MessageItem key={`${data.id}${data.message}`} message={data.message} />);

	// let onSubmit = (values) => {
	// 	// console.log(values);
	// 	props.addMessage(values.messageText);
	// }

	return (
		<div className='dialogs'>
			<div className="dialogs-name">
				{dialogsElements}
			</div>
			<div className="dialogs-item">
				<div className="dialogs-messages">
					{messagesElements}
				</div>
				<div className="dialogs-post">

					<DialogsForm addMessage={props.addMessage} />

				</div>
			</div>
		</div>

	);
}




export default Dialogs;

