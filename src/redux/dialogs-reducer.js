const ADD_MESSAGE_NAME = 'ADD-MESSAGE-NAME';
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let initialState = {
	dialogsNames: [
		{ id: 0, name: 'Nina', image: '/man.png' },
		{ id: 1, name: 'Valerii', image: '/man.png' },
		{ id: 2, name: 'Egor', image: '/man.png' },
		{ id: 3, name: 'Nastya', image: '/man.png' },
		{ id: 4, name: 'Nikita', image: '/man.png' },
	],

	messagesNames: [
		{ id: 0, message: 'Hello, How are you?' },
		{ id: 1, message: 'These women are strong' },
		{ id: 2, message: 'Nineteenth mice' },
		{ id: 3, message: 'Two divided by zero equals zero' },
		{ id: 4, message: 'Some rooms are big, and some are not.' }
	],
	// newMessageText: '',
};

export const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE_NAME: {
			let idElement = state.messagesNames.length;
			let newMessage = {
				id: idElement, message: action.newMessage,
			}
			return {
				...state,
				messagesNames: [...state.messagesNames, newMessage],
			}
		}
		// case UPDATE_NEW_MESSAGE_TEXT: {
		// 	return {
		// 		...state,
		// 		newMessageText: action.newTextMessage
		// 	}
		// }
		default:
			return state;
	}
};

export const addMessage = (newMessage) => ({ type: ADD_MESSAGE_NAME, newMessage });

// export const onMessageChange = (text) => {
// 	return {
// 		type: UPDATE_NEW_MESSAGE_TEXT,
// 		newTextMessage: text
// 	}
// };