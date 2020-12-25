const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
	users: [
		{ id: 1, photoUser: 'https://img.icons8.com/bubbles/2x/user-male.png', followed: true, fullName: 'Nikita K.', status: 'My grandfather is very happy', location: { cityName: 'Sevastopol', country: 'Russian' } },
		{ id: 2, photoUser: 'https://img.icons8.com/bubbles/2x/user-male.png', followed: false, fullName: 'Egor K.', status: 'I go to school every day', location: { cityName: 'Primorsky', country: 'Ukraine' } },
		{ id: 3, photoUser: 'https://img.icons8.com/bubbles/2x/user-male.png', followed: true, fullName: 'Alex V.', status: 'I have several cars, and they are red', location: { cityName: 'Berlin', country: 'Germany' } }
	],
};

export const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW: {
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: true }
					}
					return u;
				})
			}
		}
		case UNFOLLOW: {
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: false }
					}
					return u;
				})
			}
		}

		case SET_USERS: {
			return {
				...state,
				users: [...state.users, ...action.users]
			}
		}

		default:
			return state;
	}
};

export const followAC = (userId) => {
	return {
		type: FOLLOW, userId
	}
};

export const unFollowAC = (userId) => {
	return {
		type: UNFOLLOW, userId
	}
};

export const setUsersAC = (users) => ({ type: SET_USERS, users })
