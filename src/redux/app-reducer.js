import { getAuthUserData } from "./auth-reducer";

const INITILIZED_SUCCESS = 'INITILIZED_SUCCESS';

let initialState = {
	initilized: false,
}

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITILIZED_SUCCESS: {
			return {
				...state,
				initilized: true
			}
		}
		default:
			return state
	}
}

export const initilizedSuccess = () => ({ type: INITILIZED_SUCCESS });
export const initilizApp = () => (dispatch) => {
	let promise = dispatch(getAuthUserData());
	Promise.all([promise]).then(() => {
		dispatch(initilizedSuccess())
	})
}