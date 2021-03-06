import { UsersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
const CURRENT_PAGE = 'CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IN_FETCHING_PROGRESS = 'TOGGLE_IN_FETCHING_PROGRESS';

let initialState = {
	users: [],
	totalUsersCount: 0,
	countPage: 5,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [],
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
				// action.inProgress ?
				followingInProgress: action.inProgress
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id !== action.userId),
			}
		}

		default:
			return state;
	}
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unFollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users })

export const setCurrentPage = (currentPage) => ({ type: CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsers) => ({ type: TOTAL_USERS_COUNT, totalUsers })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleInFetchingProgress = (inProgress, userId) => ({ type: TOGGLE_IN_FETCHING_PROGRESS, inProgress, userId })


export const getUsers = (countPage, currentPage) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true));
		UsersAPI.getUsers(countPage, currentPage)
			.then(data => {
				dispatch(setUsers(data.items));
				dispatch(setTotalUsersCount(data.totalCount));
				dispatch(toggleIsFetching(false));
			});
	}
}

export const unFollow = (userId) => {
	return (dispatch) => {
		dispatch(toggleInFetchingProgress(true, userId));
		UsersAPI.unFollowUser(userId).then(data => {
			if (data.resultCode === 0) {
				dispatch(unFollowSuccess(userId));
			}
			dispatch(toggleInFetchingProgress(false, userId));
		});
	}
}

export const follow = (userId) => {
	return (dispatch) => {
		dispatch(toggleInFetchingProgress(true, userId));
		UsersAPI.followUser(userId).then(data => {
			if (data.resultCode === 0) {
				dispatch(followSuccess(userId));
			}
			dispatch(toggleInFetchingProgress(false, userId));
		});
	}
}
