// import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addMessage } from '../../redux/dialogs-reducer';
import { getDialogsNameSelector, getMessagesNamesSelector } from '../../redux/selectors/dialogs-selectors';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
	return {
		dialogsNames: getDialogsNameSelector(state),
		messagesNames: getMessagesNamesSelector(state),
		// newMessageText: getNewMessageTextSelector(state),
		// isAuth: state.auth.isAuth,
	}
};


// let mapDispatchToProps = (dispatch) => {
// 	return {
// 		addMessage: () => {
// 			dispatch(addMessageActionCreator());
// 		},
// 		onMessageChange: (text) => {
// 			dispatch(onMessageChangeActionCreator(text));
// 		}
// 	}
// }

export default compose(
	connect(mapStateToProps, { addMessage }),
	withAuthRedirect
)(Dialogs);