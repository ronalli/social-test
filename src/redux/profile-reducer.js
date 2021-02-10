import { ProfileAPI, UsersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
	postsItem: [
		{ id: 0, message: 'Some queastions are important, and some are not', date: '11.11.2020', image: '/planet-earth.png' },
		{ id: 1, message: 'She has several red blouses', date: '07.10.2020', image: '/planet-earth.png' },
		{ id: 2, message: 'Eleven minus three equals eight', date: '23.08.2020', image: '/planet-earth.png' },
		{ id: 3, message: 'Her daughter loves son them friends', date: '01.03.2020', image: '/planet-earth.png' },
		{ id: 4, message: 'I have a cold tea and several friuts', date: '29.12.2019', image: '/planet-earth.png' }
	],
	newPostText: '',
	profile: null,
	profileUserId: 2,
	status: '',
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
		}
		case UPDATE_NEW_POST_TEXT: {
			return {
				...state,
				newPostText: action.newText
			}
		}
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile
			}
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status
			}
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

export const setUserProfileSuccess = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });


export const getStatus = (userId) => (dispatch) => {
	ProfileAPI.getStatus(userId)
		.then(data => {
			dispatch(setStatus(data));
		})
}

export const updateStatus = (status) => (dispatch) => {
	ProfileAPI.updateStatus(status)
		.then(data => {
			if (data.resultCode === 0) {
				dispatch(setStatus(status));
			}
		})
}


export const getUserProfile = (userId) => (dispatch) => {
	UsersAPI.setUserProfile(userId).then(data => {
		dispatch(setUserProfileSuccess(data))
	});
}