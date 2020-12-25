import React from 'react';
import './Dialogs.css';
import DialogItem from './DialogItem/DialogsItem';
import MessageItem from './MessageItem/MessageItem';
// import { addMessageActionCreator, onMessageChangeActionCreator } from '../redux/dialogs-reducer';

const Dialogs = (props) => {


	let dialogsElements = props.dialogsNames.map((data) => {
		return <DialogItem key={`${data.id}${data.name}`} name={data.name} id={data.id} image={data.image} />
	});

	let messagesElements =
		props.messagesNames.map(data => <MessageItem key={`${data.id}${data.message}`} message={data.message} />);

	// let newMessageElement = React.createRef();

	let onAddMessage = () => {
		props.addMessage();
		// let action = addMessageActionCreator();
		// props.dispatch(action);
	}

	let onMessageChange = (e) => {
		props.onMessageChange(e.target.value);
		// let text = newMessageElement.current.value;
		// let action = onMessageChangeActionCreator(e.target.value);
		// props.dispatch(action);
	}

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
