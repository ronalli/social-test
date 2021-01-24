const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
const CURRENT_PAGE = 'CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IN_FETCHING_PROGRESS = 'TOGGLE_IN_FETCHING_PROGRESS';

let initialState = {
	users: [
		// { id: 1, photoUser: 'https://img.icons8.com/bubbles/2x/user-male.png', followed: true, fullName: 'Nikita K.', status: 'My grandfather is very happy', location: { cityName: 'Sevastopol', country: 'Russian' } },
		// { id: 2, photoUser: 'https://img.icons8.com/bubbles/2x/user-male.png', followed: false, fullName: 'Egor K.', status: 'I go to school every day', location: { cityName: 'Primorsky', country: 'Ukraine' } },
		// { id: 3, photoUser: 'https://img.icons8.com/bubbles/2x/user-male.png', followed: true, fullName: 'Alex V.', status: 'I have several cars, and they are red', location: { cityName: 'Berlin', country: 'Germany' } }
	],
	totalUsersCount: 0,
	countPage: 5,
	currentPage: 1,
	isFetching: false,
	followingInProgress: false,
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

		case TOGGLE_IS_FETCHING: {
			return {
				...state,
				isFetching: action.isFetching
			}
		}
		case TOGGLE_IN_FETCHING_PROGRESS: {
			return {
				...state,
				followingInProgress: action.inProgress,
			}
		}

		default:
			return state;
	}
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unFollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users })

export const setCurrentPage = (currentPage) => ({ type: CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsers) => ({ type: TOTAL_USERS_COUNT, totalUsers })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleInFetchingProgress = (inProgress) => ({ type: TOGGLE_IN_FETCHING_PROGRESS, inProgress })
