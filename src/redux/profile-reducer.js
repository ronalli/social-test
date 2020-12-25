const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
	postsItem: [
		{ id: 0, message: 'Some queastions are important, and some are not', date: '11.11.2020', image: '/planet-earth.png' },
		{ id: 1, message: 'She has several red blouses', date: '07.10.2020', image: '/planet-earth.png' },
		{ id: 2, message: 'Eleven minus three equals eight', date: '23.08.2020', image: '/planet-earth.png' },
		{ id: 3, message: 'Her daughter loves son them friends', date: '01.03.2020', image: '/planet-earth.png' },
		{ id: 4, message: 'I have a cold tea and several friuts', date: '29.12.2019', image: '/planet-earth.png' }
	],
	newPostText: '',
};


export const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let idElement = state.postsItem.length;
			let newPost = {
				id: idElement,
				message: state.newPostText,
				date: '11.11.2020',
				image: '/planet-earth.png'
			};
			return {
				...state,
				postsItem: [...state.postsItem, newPost],
				newPostText: ''
			}
			// let copyState = { ...state };
			// copyState.postsItem = [...state.postsItem];
			// copyState.postsItem.push(newPost);
			// copyState.newPostText = '';
			// return copyState;
		}
		case UPDATE_NEW_POST_TEXT: {
			return {
				...state,
				newPostText: action.newText
			}
			// let copyState = { ...state };
			// copyState.newPostText = action.newText;
			// return copyState;
		}
		default:
			return state;
	}
};

export const addPostActionCreator = () => {
	return {
		type: ADD_POST
	}
};

export const updateNewPostTextActionCreator = (text) => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		newText: text
	}
};