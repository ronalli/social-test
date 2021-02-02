import React from 'react';
import './Dialogs.css';
import DialogItem from './DialogItem/DialogsItem';
import MessageItem from './MessageItem/MessageItem';
import { Redirect } from 'react-router-dom';

const Dialogs = (props) => {


	let dialogsElements = props.dialogsNames.map((data) => {
		return <DialogItem key={`${data.id}${data.name}`} name={data.name} id={data.id} image={data.image} />
	});

	let messagesElements =
		props.messagesNames.map(data => <MessageItem key={`${data.id}${data.message}`} message={data.message} />);

	let onAddMessage = () => {
		props.addMessage();

	}

	let onMessageChange = (e) => {
		props.onMessageChange(e.target.value);
	}

	if (!props.isAuth) return <Redirect to='/login' />

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
					<textarea onChange={onMessageChange} value={props.newMessageText} />
					<button onClick={onAddMessage}>Отправить</button>
				</div>
			</div>
		</div>
	);
}

export default Dialogs;
