const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
const CURRENT_PAGE = 'CURRENT_PAGE';


let initialState = {
	users: [
		// { id: 1, photoUser: 'https://img.icons8.com/bubbles/2x/user-male.png', followed: true, fullName: 'Nikita K.', status: 'My grandfather is very happy', location: { cityName: 'Sevastopol', country: 'Russian' } },
		// { id: 2, photoUser: 'https://img.icons8.com/bubbles/2x/user-male.png', followed: false, fullName: 'Egor K.', status: 'I go to school every day', location: { cityName: 'Primorsky', country: 'Ukraine' } },
		// { id: 3, photoUser: 'https://img.icons8.com/bubbles/2x/user-male.png', followed: true, fullName: 'Alex V.', status: 'I have several cars, and they are red', location: { cityName: 'Berlin', country: 'Germany' } }
	],
	totalUsersCount: 0,
	countPage: 5,
	currentPage: 1,

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
				// users: [...state.users, ...action.users]
				users: action.users
			}
		}

		case CURRENT_PAGE: {
			return {
				...state,
				currentPage: action.currentPage
			}
		}

		case TOTAL_USERS_COUNT: {
			return {
				...state,
				totalUsersCount: action.totalUsers
			}
		}

		default:
			return state;
	}
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export const setCurrentPageAC = (currentPage) => ({ type: CURRENT_PAGE, currentPage });

export const setTotalUsersCountAC = (totalUsers) => ({ type: TOTAL_USERS_COUNT, totalUsers })
