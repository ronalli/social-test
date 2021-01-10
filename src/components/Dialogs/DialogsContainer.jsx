// import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

// const DialogsContainer = (props) => {
// 	let state = props.store.getState();


// 	let addMessage = () => {
// 		let action = addMessageActionCreator();
// 		props.store.dispatch(action);
// 	}

// 	let onMessageChange = (text) => {
// 		// let text = newMessageElement.current.value;
// 		let action = onMessageChangeActionCreator(text);
// 		props.store.dispatch(action);
// 	}

// 	return (
// 		<Dialogs
// 			addMessage={addMessage}
// 			onMessageChange={onMessageChange}
// 			dialogsNames={state.dialogsPage.dialogsNames}
// 			newMessageText={state.dialogsPage.newMessageText}
// 			messagesNames={state.dialogsPage.messagesNames}
// 		/>
// 	);
// }

let mapStateToProps = (state) => {
	return {
		dialogsNames: state.dialogsPage.dialogsNames,
		messagesNames: state.dialogsPage.messagesNames,
		newMessageText: state.dialogsPage.newMessageText,
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		addMessage: () => {
			dispatch(addMessageActionCreator());
		},
		onMessageChange: (text) => {
			dispatch(onMessageChangeActionCreator(text));
		}
	}
}



const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;
