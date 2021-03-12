import * as axios from 'axios';

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': 'b7bf1072-5b8f-4d6c-8a1e-7fddd7eae7b1',
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

	getUserFollow(userId) {
		return instance.get(`follow/${userId}`)
			.then(response => response.data)
	},

	setDialogs(userId) {
		return instance.put(`dialogs/${userId}`, { messages: 'Hello' })
			.then(response => response.data)
	},

	getDialogs() {
		return instance.get(`dialogs`)
			.then(response => response.data)
	},

	getMessageUser(userId) {
		return instance.get(`dialogs/${userId}/messages`)
			.then(response => response.data)
	},

	setMessagesUser(userId) {
		return instance.post(`dialogs/${userId}/messages`, { body: 'Hello' })
			.then(response => response.data)
	}

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

	loginMe(email, password, rememberMe) {
		return instance.post(`auth/login`, { email, password, rememberMe })
			.then(response => response)
	},

	logoutMe() {
		return instance.delete(`auth/login`);
	},

};

export const SecurityAPI = {
	getCaptchaLogin() {
		return instance.get(`security/get-captcha-url`);
	}
}