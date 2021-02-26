export const getUsersSelector = (state) => {
	return state.usersPage.users
}

export const getTotalUsersCountSelector = (state) => {
	return state.usersPage.totalUsersCount
}

export const getCurrentPageSelector = (state) => {
	return state.usersPage.currentPage
}

export const getCountPageSelector = (state) => {
	return state.usersPage.countPage
}

export const getIsFetchingSelector = (state) => {
	return state.usersPage.isFetching
}

export const getFollowingInProgressSelector = (state) => {
	return state.usersPage.followingInProgress
}