import { AuthAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTH = 'SET_AUTH';
const ERROR_AUTH = 'ERROR_AUTH';


let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
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



export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, data: { id, email, login, isAuth } });
export const setAuth = (email, rememberMe, id, isAuth) => ({ type: SET_AUTH, data: { email, rememberMe, id, isAuth } });
export const errorAuth = (message) => ({ type: ERROR_AUTH, message });

export const getAuthUserData = () => (dispatch) => {
	AuthAPI.authMe().then(data => {
		let { id, email, login } = data.data;
		// console.log(data.data);
		if (data.resultCode === 0) {
			dispatch(setAuthUserData(id, email, login, true));
		}
	});
}

export const postAuth = (payload) => (dispatch) => {
	AuthAPI.loginMe(payload.email, payload.password, payload.rememberMe = false)
		.then(dataResponse => {
			if (dataResponse.data.resultCode === 0) {
				dispatch(setAuth(payload.email, payload.rememberMe, dataResponse.data.data.userId, true))
				dispatch(getAuthUserData())
			} else {
				dispatch(errorAuth('Inccorrect password or email'))
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


