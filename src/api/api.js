import * as axios from 'axios';

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': 'de0dbbca-2f67-44f5-acff-d439b58f71ed',
	},
	withCredentials: true
});


export const UsersAPI = {
	getUsers(countPage = 5, currentPage = 1) {
		return instance.get(`users?count=${countPage}&page=${currentPage}`).then(response => response.data)
	},

	unFollowUser(userId) {
		return instance.delete(`follow/${userId}`)
			.then(response => response.data)
	},

	followUser(userId) {
		return instance.post(`follow/${userId}`)
			.then(response => response.data)
	},

	setUserProfile(userId) {
		console.log('Этот метод устарел! В новых версиях, используйте новые возможности.');
		return ProfileAPI.getProfile(userId);
	},

};

export const ProfileAPI = {
	getProfile(userId) {
		return instance.get(`profile/${userId}`)
			.then(response => response.data)
	},

	getStatus(userId) {
		return instance.get(`profile/status/${userId}`)
			.then(response => response.data)
	},

	updateStatus(status) {
		return instance.put(`profile/status`, { status: status })
			.then(response => response.data)
	}

}


export const AuthAPI = {
	authMe() {
		return instance.get(`auth/me`)
			.then(response => response.data)
	},
};