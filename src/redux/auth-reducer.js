import { AuthAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTH = 'SET_AUTH';
const ERROR_AUTH = 'ERROR_AUTH';


let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	password: null,
	rememberMe: null,
	errorAuth: '',
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.data,
			}
		}
		case SET_AUTH: {
			return {
				...state,
				...action.data,
			}
		}
		case ERROR_AUTH: {
			return {
				...state,
				errorAuth: action.message
			}
		}
		default:
			return state;
	}
};



export const setAuthUserData = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } });
export const setAuth = (email, password, rememberMe, isAuth) => ({ type: SET_AUTH, data: { email, password, rememberMe, isAuth } });
export const errorAuth = (message) => ({ type: ERROR_AUTH, message });

export const getAuthUserData = () => (dispatch) => {
	AuthAPI.authMe().then(data => {
		let { id, email, login } = data.data;
		if (data.resultCode === 0) {
			dispatch(setAuthUserData(id, email, login));
		}
	});
}

export const postAuth = (payload) => (dispatch) => {
	AuthAPI.loginMe(payload.email, payload.password, payload.rememberMe = false)
		.then(dataResponse => {
			if (dataResponse.data.resultCode === 1) {
				dispatch(errorAuth('Inccorrect password or email'))
			}
			if (dataResponse.data.resultCode === 0) {
				dispatch(setAuth(payload.email, payload.password, payload.rememberMe, true))
				dispatch(getAuthUserData())
			}
		})
}

export const logout = () => (dispatch) => {
	AuthAPI.logoutMe()
		.then(dataResponse => {
			if (dataResponse.data.resultCode === 0) {
				dispatch(setAuth(null, null, null, false))
			}
		})
}


