export const getErrorAuthSelector = (state) => {
	return state.auth.errorAuth;
}

export const getIsAuthSelector = (state) => {
	return state.auth.isAuth;
}

export const getLoginSelector = (state) => {
	return state.auth.login;
}

export const getAuthIdSelector = (state) => {
	return state.auth.id;
}

export const getCaptchaUrl = (state) => {
	return state.auth.captchaUrl;
}