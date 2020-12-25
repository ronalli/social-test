let rerenderEntireTree = () => {
	console.log('state changed');
}

let state = {
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
	},

	sidebar: {
		profileFriends: [
			{ id: 0, name: 'Nina', image: '/man.png' },
			{ id: 1, name: 'Valerii', image: '/man.png' },
			{ id: 2, name: 'Egor', image: '/man.png' }
		],
	}
};


export const addPost = () => {
	let idElement = state.profilePage.postsItem.length;
	let newPost = {
		id: idElement,
		message: state.profilePage.newPostText,
		date: '11.11.2020',
		image: '/planet-earth.png'
	};

	state.profilePage.postsItem.push(newPost);
	state.profilePage.newPostText = '';
	rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	rerenderEntireTree(state);
};

export const addMessageName = (textMessage) => {
	let idElement = state.dialogsPage.messagesNames.length;
	let newMessage = {
		id: idElement, message: textMessage,
	}
	state.dialogsPage.messagesNames.push(newMessage);
};

export const subscribe = (observer) => {
	rerenderEntireTree = observer;
}


export default state;