// import React from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
	return {
		dialogsNames: state.dialogsPage.dialogsNames,
		messagesNames: state.dialogsPage.messagesNames,
		newMessageText: state.dialogsPage.newMessageText,
		// isAuth: state.auth.isAuth,
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

let AuthRedirectComponent = withAuthRedirect(Dialogs);


export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
