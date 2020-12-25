import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { sidebarReducer } from "./sidebar-reducer";



// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const ADD_MESSAGE_NAME = 'ADD-MESSAGE-NAME';
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';



let store = {
	_state: {
		profilePage: {
			postsItem: [
				{ id: 0, message: 'Some queastions are important, and some are not', date: '11.11.2020', image: '/planet-earth.png' },
				{ id: 1, message: 'She has several red blouses', date: '07.10.2020', image: '/planet-earth.png' },
				{ id: 2, message: 'Eleven minus three equals eight', date: '23.08.2020', image: '/planet-earth.png' },
				{ id: 3, message: 'Her daughter loves son them friends', date: '01.03.2020', image: '/planet-earth.png' },
				{ id: 4, message: 'I have a cold tea and several friuts', date: '29.12.2019', image: '/planet-earth.png' }
			],
			newPostText: '',

		},
		dialogsPage: {

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
			newMessageText: '',
		},

		sidebar: {
			profileFriends: [
				{ id: 0, name: 'Nina', image: '/man.png' },
				{ id: 1, name: 'Valerii', image: '/man.png' },
				{ id: 2, name: 'Egor', image: '/man.png' }
			],
		}
	},

	getState() {
		return this._state;
	},

	_callSubscriber() {
		console.log('state changed');
	},

	dispatch(action) {

		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);

		// if (action.type === ADD_POST) {
		// 	let idElement = this._state.profilePage.postsItem.length;
		// 	let newPost = {
		// 		id: idElement,
		// 		message: this._state.profilePage.newPostText,
		// 		date: '11.11.2020',
		// 		image: '/planet-earth.png'
		// 	};
		// 	this._state.profilePage.postsItem.push(newPost);
		// 	this._state.profilePage.newPostText = '';
		// 	this._callSubscriber(this._state);
		// } else if (action.type === UPDATE_NEW_POST_TEXT) {
		// 	this._state.profilePage.newPostText = action.newText;
		// 	this._callSubscriber(this._state);
		// }
		// else if (action.type === ADD_MESSAGE_NAME) {
		// 	let idElement = this._state.dialogsPage.messagesNames.length;
		// 	let newMessage = {
		// 		id: idElement, message: this._state.dialogsPage.newMessageText,
		// 	}
		// 	this._state.dialogsPage.messagesNames.push(newMessage);
		// 	this._state.dialogsPage.newMessageText = '';
		// 	this._callSubscriber(this._state);
		// } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
		// 	this._state.dialogsPage.newMessageText = action.newTextMessage;
		// 	this._callSubscriber(this._state);
		// }
	},

	// addPost() {
	// 	let idElement = this._state.profilePage.postsItem.length;
	// 	let newPost = {
	// 		id: idElement,
	// 		message: this._state.profilePage.newPostText,
	// 		date: '11.11.2020',
	// 		image: '/planet-earth.png'
	// 	};

	// 	this._state.profilePage.postsItem.push(newPost);
	// 	this._state.profilePage.newPostText = '';
	// 	this._callSubscriber(this._state);
	// },

	// updateNewPostText(newText) {
	// 	this._state.profilePage.newPostText = newText;
	// 	this._callSubscriber(this._state);
	// },

	// addMessageName(textMessage) {
	// 	let idElement = this._state.dialogsPage.messagesNames.length;
	// 	let newMessage = {
	// 		id: idElement, message: textMessage,
	// 	}
	// 	this._state.dialogsPage.messagesNames.push(newMessage);
	// },

	subscribe(observer) {
		this._callSubscriber = observer;
	}
}

// export const addPostActionCreator = () => {
// 	return {
// 		type: ADD_POST
// 	}
// }

// export const updateNewPostTextActionCreator = (text) => {
// 	return {
// 		type: UPDATE_NEW_POST_TEXT,
// 		newText: text
// 	}
// }

// export const addMessageActionCreator = () => {
// 	return {
// 		type: ADD_MESSAGE_NAME
// 	}
// }

// export const onMessageChangeActionCreator = (text) => {
// 	return {
// 		type: UPDATE_NEW_MESSAGE_TEXT,
// 		newTextMessage: text
// 	}
// }


export default store;






// let rerenderEntireTree = () => {
// 		console.log('state changed');
// 	}

// let state = {
// 	profilePage: {
// 		postsItem: [
// 			{ id: 0, message: 'Some queastions are important, and some are not', date: '11.11.2020', image: '/planet-earth.png' },
// 			{ id: 1, message: 'She has several red blouses', date: '07.10.2020', image: '/planet-earth.png' },
// 			{ id: 2, message: 'Eleven minus three equals eight', date: '23.08.2020', image: '/planet-earth.png' },
// 			{ id: 3, message: 'Her daughter loves son them friends', date: '01.03.2020', image: '/planet-earth.png' },
// 			{ id: 4, message: 'I have a cold tea and several friuts', date: '29.12.2019', image: '/planet-earth.png' }
// 		],
// 		newPostText: '',

// 	},
// 	dialogsPage: {

// 		dialogsNames: [
// 			{ id: 0, name: 'Nina', image: '/man.png' },
// 			{ id: 1, name: 'Valerii', image: '/man.png' },
// 			{ id: 2, name: 'Egor', image: '/man.png' },
// 			{ id: 3, name: 'Nastya', image: '/man.png' },
// 			{ id: 4, name: 'Nikita', image: '/man.png' },
// 		],

// 		messagesNames: [
// 			{ id: 0, message: 'Hello, How are you?' },
// 			{ id: 1, message: 'These women are strong' },
// 			{ id: 2, message: 'Nineteenth mice' },
// 			{ id: 3, message: 'Two divided by zero equals zero' },
// 			{ id: 4, message: 'Some rooms are big, and some are not.' }
// 		],
// 	},

// 	sidebar: {
// 		profileFriends: [
// 			{ id: 0, name: 'Nina', image: '/man.png' },
// 			{ id: 1, name: 'Valerii', image: '/man.png' },
// 			{ id: 2, name: 'Egor', image: '/man.png' }
// 		],
// 	}
// };


// export const addPost = () => {
// 	let idElement = state.profilePage.postsItem.length;
// 	let newPost = {
// 		id: idElement,
// 		message: state.profilePage.newPostText,
// 		date: '11.11.2020',
// 		image: '/planet-earth.png'
// 	};

// 	state.profilePage.postsItem.push(newPost);
// 	state.profilePage.newPostText = '';
// 	rerenderEntireTree(state);
// };

// export const updateNewPostText = (newText) => {
// 	state.profilePage.newPostText = newText;
// 	rerenderEntireTree(state);
// };

// export const addMessageName = (textMessage) => {
// 	let idElement = state.dialogsPage.messagesNames.length;
// 	let newMessage = {
// 		id: idElement, message: textMessage,
// 	}
// 	state.dialogsPage.messagesNames.push(newMessage);
// };

// export const subscribe = (observer) => {
// 	rerenderEntireTree = observer;
// }


